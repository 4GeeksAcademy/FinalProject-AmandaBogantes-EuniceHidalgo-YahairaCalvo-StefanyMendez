"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory,render_template
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
from flask import Flask
from flask_mail import Mail, Message
from flask import Flask, make_response
from datetime import datetime


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
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'dev.solutions.team23@gmail.com'
app.config['MAIL_PASSWORD'] = 'jfihzvwnbjmzgnkt'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
MIGRATE = Migrate(app, db, compare_type=True)

db.init_app(app)
# <----------------- NODEMAILER----------------------->
mail = Mail(app)

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

# <----------------- User ----------------------->


@app.route('/user', methods=['GET'])
@jwt_required()
def getUsers():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("Users not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)

    users = User.query.all()
    
    if users is None:
        raise APIException("Users not found", status_code=404)

    users = list(map(lambda user: user.serialize(), user))
    sorted_users = sorted(users, key=lambda user: user['id'])

    response_body = {
        "msg": "ok",
        "Users": sorted_users

    }

    return jsonify(response_body), 200


@app.route('/user/<int:user_id>', methods=['GET'])
@jwt_required()
def getUserById(user_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)

    user = User.query.get(user_id)
    
    if user is None:
        raise APIException("Users not found", status_code=404)
    
    response_body = {
        "msg": "ok",
        "User": {
            "id": user.id,
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "phone": user.phone,
            "role": user.role.name,
            "question_security": user.question_security.name,
            "answer_security": user.answer_security,
        },
    }

    return jsonify(response_body), 200


@app.route('/user/<string:user_username>', methods=['GET'])
@jwt_required()
def getUserByUsername(user_username):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    target_user = User.query.filter_by(username=user_username).first()

    if target_user is None:
        raise APIException("User not found", status_code=404)

    response_body = {
        "msg": "ok",
        "User": {
            "id": target_user.id,
            "username": target_user.username,
            "first_name": target_user.first_name,
            "last_name": target_user.last_name,
            "phone": target_user.phone,
            "role": target_user.role.name,
            "question_security": target_user.question_security.name,
            "answer_security": target_user.answer_security,
        },
    }

    return jsonify(response_body), 200


@app.route('/user', methods=['POST'])
@jwt_required()
def addUser():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    
    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", status_code=400)

    if "username" not in request_body or request_body["username"] == "":
        raise APIException("The username is required", status_code=404)

    if "first_name" not in request_body or request_body["first_name"] == "":
        raise APIException("The first name is required", status_code=404)

    if "last_name" not in request_body or request_body["last_name"] == "":
        raise APIException("The last name is required", status_code=404)

    if "phone" not in request_body or request_body["phone"] == "":
        raise APIException("The phone is required", status_code=404)

    if "password" not in request_body or request_body["password"] == "":
        raise APIException("The password is required", status_code=404)

    if "role" not in request_body or request_body["role"] == "":
        raise APIException("The role is required", status_code=404)

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
        role=request_body['role'],
        question_security=request_body['question_security'],
        answer_security=request_body['answer_security']
    )
    user.save()

    response_body = {
        "msg": "ok",
        "User": user.serialize()
    }

    return jsonify(response_body), 200


@app.route('/user/<int:user_id>', methods=['PUT'])
@jwt_required()
def updateUser(user_id):
    request_body = request.get_json(force=True, silent=True)
    user = User.query.get(user_id)

    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)

    if request_body is None:
        raise APIException("You must send information", status_code=404)

    if "first_name" in request_body:
        user.first_name = request_body['first_name']

    if "last_name" in request_body:
        user.last_name = request_body['last_name']

    if "role" in request_body:
        user.role = request_body['role']

    if "phone" in request_body:
        user.phone = request_body['phone']

    if "password" in request_body:
        pw_hash = bcrypt.generate_password_hash(
            request_body['password']).decode("utf-8")
        user.password = pw_hash

    user.update()

    response_body = {
        "msg": "ok",
        "User": user.serialize()
    }

    return jsonify(response_body), 200


@app.route('/user/<int:user_id>', methods=['DELETE'])
@jwt_required()
def deleteUser(user_id):
    user = User.query.get(user_id)
    admin = User.query.filter_by(role = "admin").first()
    job_by_status_finish = Job.query.filter_by(id_technical = user_id, status="finish")
    job_by_status_cancel = Job.query.filter_by(id_technical = user_id, status="cancel")
    
    for job_finish in job_by_status_finish:
        job_finish.id_technical = admin.id
        job_finish.update()
        
    
    for job_cancel in job_by_status_cancel:
        job_cancel.id_technical = admin.id
        job_cancel.update()
        
    
    job = Job.query.filter_by(id_technical = user_id).first()
    if job is not None:
        raise APIException(f"The tecinical has jobs asigned, please reassign jobs before proceeding", status_code=400)

    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)

    user.delete()

    response_body = {
        "msg": "ok"
    }

    return jsonify(response_body)


# <----------------- Login ----------------------->


@app.route('/login', methods=['POST'])
def addLogin():
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", status_code=404)

    if "username" not in request_body or request_body["username"] == "":
        raise APIException("The username is required", status_code=404)

    if "password" not in request_body or request_body["password"] == "":
        raise APIException("The password is required", status_code=404)

    user_data = User.query.filter_by(username=request_body['username']).first()

    if user_data is None:
        raise APIException("The username is incorrect", status_code=404)

    if bcrypt.check_password_hash(user_data.password, request_body['password']) is False:
        raise APIException('The password is incorrect', 401)

    access_token = create_access_token(identity=request_body['username'])

    response_body = {
        "msg": "ok",
        "access_token": access_token,
        "User": user_data.serialize()
    }

    return jsonify(response_body), 200


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

# <----------------- Client ----------------------->


@app.route('/client', methods=['GET'])
@jwt_required()
def getClients():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("Clients not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)

    client = Client.query.all()
    
    if clients is None:
        raise APIException("Clients not found", status_code=404)
    
    clients = list(map(lambda client: client.serialize(), client))
    sorted_clients = sorted(clients, key=lambda client: client['id'])

    response_body = {
        "msg": "ok",
        "clients": sorted_clients
    }

    return jsonify(response_body), 200


@app.route('/client/<int:client_id>', methods=['GET'])
@jwt_required()
def getClient(client_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)

    if user.role != "admin":
        raise APIException("Access denied", status_code=403)    
    
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
@jwt_required()
def addClient():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)

    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", 400)

    if "first_name" not in request_body or request_body["first_name"] == "":
        raise APIException("The first name is required", status_code=404)

    if "last_name" not in request_body or request_body["last_name"] == "":
        raise APIException("The last name is required")

    if "phone" not in request_body or request_body["phone"] == "":
        raise APIException("The phone is required")
    
    client_exist = Client.query.filter_by(
        first_name=request_body['first_name'], 
        last_name=request_body['last_name'], 
        phone=request_body['phone']).first()

    if client_exist:
        raise APIException("The client already exist", status_code=400)

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
@jwt_required()
def updateClient(client_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)

    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
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
@jwt_required()
def deleteClient(client_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    
    if user is None:
        raise APIException("User not found", status_code=404)

    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    client = Client.query.get(client_id)

    if client is None:
        raise APIException("Client not found", status_code=400)

    client.delete()

    response_body = {
        "msg": "ok",
        "client": client.serialize()
    }

    return jsonify(response_body), 200

# <----------------- Job ----------------------->


@app.route('/job', methods=['GET'])
@jwt_required()
def getJobs():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    
    if user is None:
        raise APIException("Users not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    job = Job.query.all()

    if job is None:
        raise APIException("Jobs not found")

    jobs = list(map(lambda job: job.serialize(), job))

    sorted_jobs = sorted(jobs, key=lambda job: job['id'])
    
    response_body = {
        "msg": "ok",
        "Jobs": sorted_jobs
    }
    return jsonify(response_body), 200


@app.route('/job/<int:job_id>', methods=['GET'])
@jwt_required()
def getJobById(job_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    
    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    job = Job.query.get(job_id)

    if job is None:
        raise APIException("Job not found", status_code=404)

    response_body = {
            "msg": "ok",
            "Job": {
                "id": job.id,
                "code": job.code,
                "type": job.type.name,
                "brand": job.brand,
                "model": job.model,
                "serial_number": job.serial_number,
                "status": job.status.name,
                "issues": job.issues,
                "comments": job.comments,
                "time_stamp": job.time_stamp,
                "technical": job.technical.serialize(),
                "client": job.client.serialize()
            }
        }
    return jsonify(response_body), 200



@app.route('/job/technical/<int:technical_id>', methods=['GET'])
@jwt_required()
def getJobsByTechnical(technical_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "technical":
        raise APIException("Access denied", status_code=403)
    
    job = Job.query.filter_by(id_technical=technical_id)
    jobs = list(map(lambda job: job.serialize(), job))
    

    if job is None:
        raise APIException("Jobs not found", status_code=404)

    sorted_jobs = sorted(jobs, key=lambda job: job['id'])
    response_body = {
        "msg": "ok",
        "Jobs": sorted_jobs
    }
    return jsonify(response_body), 200


@app.route('/job/client/<int:client_id>', methods=['GET'])
@jwt_required()
def getJobsByClient(client_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("Users not found", status_code=404)
        
    job = Job.query.filter_by(id_client=client_id)
    jobs = list(map(lambda job: job.serialize(), job))

    if job is None:
        raise APIException("Jobs not found", status_code=404)

    response_body = {
        "msg": "ok",
        "Jobs": jobs
    }
    return jsonify(response_body), 200


@app.route('/job/code/<string:code>', methods=['GET'])
def getJobByCode(code):
    job = Job.query.filter_by(code=code).first()

    if job is None:
        raise APIException("Job not found", status_code=404)

    response_body = {
        "msg": "ok",
        "Job": job.serialize()
    }

    return jsonify(response_body), 200


@app.route('/job', methods=['POST'])
@jwt_required()
def addJob():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)

    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", status_code=400)

    if "code" not in request_body or request_body["code"] == "":
        raise APIException("The code is required", status_code=404)

    if "type" not in request_body or request_body["type"] == "":
        raise APIException("The type is required", status_code=404)

    if "brand" not in request_body or request_body["brand"] == "":
        raise APIException("The brand is required", status_code=404)

    if "model" not in request_body or request_body["model"] == "":
        raise APIException("The model is required", status_code=404)

    if "serial_number" not in request_body or request_body["serial_number"] == "":
        raise APIException("The serial number is required", status_code=404)

    if "status" not in request_body or request_body["status"] == "":
        raise APIException("The status is required", status_code=404)

    if "issues" not in request_body or request_body["issues"] == "":
        raise APIException("The issues are required", status_code=404)

    if "id_technical" not in request_body or request_body["id_technical"] == "":
        raise APIException("The id technical is required", status_code=404)

    if "id_client" not in request_body or request_body["id_client"] == "":
        raise APIException("The id client is required", status_code=404)

    job_code_exist = Job.query.filter_by(code=request_body['code']).first()

    if job_code_exist:
        raise APIException("The code already exist", status_code=400)

    if "comments" in request_body:
        comments = request_body['comments']
    else:
        comments = ""

    job = Job(
        code=request_body['code'],
        type=request_body['type'],
        brand=request_body['brand'],
        model=request_body['model'],
        serial_number=request_body['serial_number'],
        status=request_body['status'],
        issues=request_body['issues'],
        comments=comments,
        id_technical=request_body['id_technical'],
        id_client=request_body['id_client'],
        time_stamp=datetime.utcnow()
    )
    job.save()

    response_body = {
        "msg": "ok",
        "Job": job.serialize()
    }

    return jsonify(response_body), 200


@app.route('/job/<int:job_id>', methods=['PUT'])
@jwt_required()
def updateJob(job_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    
    if user is None:
        raise APIException("User not found", status_code=404)
    
    job = Job.query.get(job_id)

    if job is None:
        raise APIException("Job not found", status_code=404)
    
    request_body = request.get_json(force=True, silent=True)

    if request_body is None:
        raise APIException("You must send information", status_code=404)
    
    if user.role == "admin":
        if "type" in request_body:
            job.type = request_body['type']

        if "brand" in request_body:
            job.brand = request_body['brand']

        if "model" in request_body:
            job.model = request_body['model']

        if "serial_number" in request_body:
            job.serial_number = request_body['serial_number']

        if "status" in request_body:
            job.status = request_body['status']
            
        if "issues" in request_body:
            job.issues = request_body['issues']

        if "comments" in request_body:
            job.comments = request_body['comments']
            
        if "id_technical" in request_body:
            job.id_technical = request_body['id_technical']
        
        if "id_client" in request_body:
            job.id_client = request_body['id_client']
        
    elif user.role == "technical":
        if "comments" in request_body:
            job.comments = request_body['comments']
        if "status" in request_body:
            job.status = request_body['status']
    else:
        raise APIException("Access denied", status_code=403)

    job.update()

    response_body = {
        "msg": "ok",
        "Job": job.serialize()
    }

    return jsonify(response_body), 200


@app.route('/job/<int:job_id>', methods=['DELETE'])
@jwt_required()
def deleteJob(job_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.role != "admin":
        raise APIException("Access denied", status_code=403)
    
    job = Job.query.get(job_id)

    if job is None:
        raise APIException("Job not found", status_code=404)

    job.delete()

    response_body = {
        "msg": "ok"
    }

    return jsonify(response_body), 200

# <----------------- NODEMAILER----------------------->

@app.route('/send_email', methods=['POST'])
def send_email():
    request_body = request.json
    print(request_body)
    msg = Message('Message from contact form', sender='dev.solutions.team23@gmail.com',
                  recipients=['dev.solutions.team23@gmail.com'])
    msg.html=render_template("contact.html",question=request_body["question"],message=request_body["message"],email=request_body["email"],phone=request_body["phone"])
    mail.send(msg)
    return 'Correo enviado con éxito!'



# this only runs if `$ python src/main.py` is executed
if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=PORT, debug=True)

