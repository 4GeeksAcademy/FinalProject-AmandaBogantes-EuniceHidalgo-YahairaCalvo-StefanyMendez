"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Client, Job
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
    create_access_token,
    JWTManager,
)

# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "../public/"
)
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.url_map.strict_slashes = False

app.config["JWT_SECRET_KEY"] = os.environ.get("JWS_SECRET")
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url.replace(
        "postgres://", "postgresql://"
    )
else:
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix="/api")


# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


# generate sitemap with all your endpoints
@app.route("/")
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, "index.html")


# any other endpoint will try to serve it like a static file
@app.route("/<path:path>", methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = "index.html"
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


@app.route('/user', methods=['GET'])
def getUsers():
    user = User.query.all()

    if user is None:
        raise APIException("Users not found", status_code=404)

    users = list(map(lambda user: user.serialize(), user))

    response_body = {
        "msg": "ok",
        "Users": users
    }

    return jsonify(response_body), 200


@app.route('/user/<int:user_id>', methods=['GET'])
def getUserById(user_id):
    user = User.query.get(user_id)

    if user is None:
        raise APIException("User not found", status_code=404)

    response_body = {
        "msg": "ok",
        "User": {
            "id": user.id,
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "phone": user.phone,
            # "role":user.role,
            "question_security": user.question_security,
            "answer_security": user.answer_security,
        },
    }

    return jsonify(response_body), 200


@app.route('/user/<string:user_username>', methods=['GET'])
def getUserByUsername(user_username):
    user = User.query.filter_by(username=user_username).first()

    if user is None:
        raise APIException("User not found", status_code=404)

    response_body = {
        "msg": "ok",
        "User": {
            "id": user.id,
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "phone": user.phone,
            # "role":user.role,
            "question_security": user.question_security,
            "answer_security": user.answer_security,
        },
    }

    return jsonify(response_body), 200


@app.route('/user', methods=['POST'])
def addUser():
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", status_code=400)

    if "username" not in request_body:
        raise APIException("The username is required", status_code=404)

    if "first_name" not in request_body:
        raise APIException("The first name is required", status_code=404)

    if "last_name" not in request_body:
        raise APIException("The last name is required", status_code=404)

    if "phone" not in request_body:
        raise APIException("The phone is required", status_code=404)

    if "password" not in request_body:
        raise APIException("The password is required", status_code=404)

    # if "role" not in request_body:
    # raise APIException("The role is required", status_code=404)

    if "question_security" not in request_body:
        raise APIException(
            "The question security is required", status_code=404)

    if "answer_security" not in request_body:
        raise APIException("The answer security is required", status_code=404)

    username_exist = User.query.filter_by(
        username=request_body['username']).first()

    if username_exist:
        raise APIException("The username already exist", status_code=400)

    pw_hash = bcrypt.generate_password_hash(
        request_body['password']).decode("utf-8")

    user = User(
        username=request_body['username'],
        first_name=request_body['first_name'],
        last_name=request_body['last_name'],
        phone=request_body['phone'],
        password=pw_hash,
        # role = request_body['#role'],
        question_security=request_body['question_security'],
        answer_security=request_body['answer_security'],
    )
    user.save()
    
    response_body = {
        "msg": "ok", 
        "User": user.serialize()
        }

    return jsonify(response_body), 200


@app.route('/user/<int:user_id>', methods=['PUT'])
def updateUser(user_id):
    request_body = request.get_json(force=True, silent=True)
    user = User.query.get(user_id)

    if user is None:
        raise APIException("User not found", status_code=404)

    if request_body is None:
        raise APIException("You must send information", status_code=404)

    if "first_name" in request_body:
        user.first_name = request_body['first_name']

    if "last_name" in request_body:
        user.last_name = request_body['last_name']

    """ if "role" in request_body:
        user.role = request_body['role'] """

    if "phone" in request_body:
        user.phone = request_body['phone']

    if "password" in request_body:
        user.password = request_body['password']

    user.update()

    response_body = {
        "msg": "ok", 
        "User": user.serialize()
        }

    return jsonify(response_body), 200


@app.route('/user/<int:user_id>', methods=['DELETE'])
def deleteUser(user_id):
    user = User.query.get(user_id)

    if user is None:
        raise APIException("User not found", status_code=404)

    user.delete()

    response_body = {
        "msg": "ok"
        }

    return jsonify(response_body)


# <-- Login -->


@app.route('/login', methods=['POST'])
def addLogin():
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", status_code=404)

    if "username" not in request_body:
        raise APIException("The username is required", status_code=404)

    if "password" not in request_body:
        raise APIException("The password is required", status_code=404)

    user_data = User.query.filter_by(username=request_body['username']).first()

    if user_data is None:
        raise APIException("The user is incorrect", status_code=404)

    if user_data.password != request_body['password']:
        raise APIException("The password is incorrect")

    access_token = create_access_token(identity=request_body['username'])

    return jsonify(access_token=access_token), 200


@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        return jsonify({"message": "User not found"}), 404
    
    response_body = {
        "id": user.id,
        "username": user.username,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "phone": user.phone,
        "role": user.role,
        "question_security": user.question_security,
        "answer_security": user.answer_security
    }

    return jsonify(response_body), 200

# <-- Client -->


@app.route('/client', methods=['GET'])
def getClients():
    client = Client.query.all()

    if client is None:
        raise APIException("Clients not found", status_code=404)

    clients = list(map(lambda client: client.serialize(), client))

    response_body = {
        "msg": "ok", 
        "clients": clients
        }

    return jsonify(response_body), 200


@app.route('/client/<int:client_id>', methods=['GET'])
def getClient(client_id):
    client = Client.query.get(client_id)

    if client is None:
        raise APIException("Client not found", status_code=404)

    response_body = {
        "msg": "ok",
        "Client": {
            "id": client.id,
            "first_name": client.first_name,
            "last_name": client.last_name,
            "phone": client.phone,
        },
    }

    return jsonify(response_body), 200


@app.route('/client', methods=['POST'])
def addClient():
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", 400)

    if "first_name" not in request_body:
        raise APIException("The first name is required", status_code=404)

    if "last_name" not in request_body:
        raise APIException("The last name is required")

    if "phone" not in request_body:
        raise APIException("The phone is required")

    client = Client(
        first_name=request_body['first_name'],
        last_name=request_body['last_name'],
        phone=request_body['phone'],
    )

    client.save()

    response_body = {
        "msg": "ok", 
        "client": client.serialize()
        }

    return jsonify(response_body), 200


@app.route('/client/<int:client_id>', methods=['PUT'])
def updateClient(client_id):
    request_body = request.get_json(force=True, silent=True)
    client = Client.query.get(client_id)

    if client is None:
        raise APIException("Client not found", status_code=404)

    if request_body is None:
        raise APIException("You must send information", status_code=400)

    if "first_name" in request_body:
        client.first_name = request_body['first_name']

    if "last_name" in request_body:
        client.last_name = request_body['last_name']

    if "phone" in request_body:
        client.phone = request_body['phone']

    client.update()

    response_body = {
        "msg": "ok", 
        "client": client.serialize()
        }

    return jsonify(response_body), 200


@app.route('/client/<int:client_id>', methods=['DELETE'])
def deleteClient(client_id):
    client = Client.query.get(client_id)

    if client is None:
        raise APIException("Client not found", status_code=400)

    client.delete()

    response_body = {
        "msg": "ok", 
        "client": client.serialize()
        }

    return jsonify(response_body), 200


@app.route('/job', methods=['GET'])
def getJobs():
    job = Job.query.all()

    if job is None:
        raise APIException("Jobs not found")

    jobs = list(map(lambda job: job.serialize(), job))

    response_body = {
        "msg": "ok",
        "Jobs": jobs
    }
    return jsonify(response_body), 200


# this only runs if `$ python src/main.py` is executed
if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=PORT, debug=True)
