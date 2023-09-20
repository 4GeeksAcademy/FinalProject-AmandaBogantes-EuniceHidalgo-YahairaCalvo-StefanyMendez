from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import pytz

import enum

db = SQLAlchemy()


class role(enum.Enum):
    admin = "admin"
    technical = "technical"


class questions(enum.Enum):
    pet = "What is the name of your first pet?"
    color = "What is your favorite color?"
    movie = "What is your favorite movie?"
    food = "What is your favorite food?"


class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    role = db.Column(db.Enum(role), nullable=False)
    question_security = db.Column(db.Enum(questions), nullable=False)
    answer_security = db.Column(db.String(150), nullable=False)

    def __repr__(self):
        return f'<User {self.first_name +" "+  self.last_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "role": self.role.value,
            "question_security": self.question_security.value,
            "answer_security": self.answer_security
            # do not serialize the password, its a security breach
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Client (db.Model):

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'<Client {self.first_name + " " + self.last_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class type (enum.Enum):
    laptop = "Laptop"
    cpu = "Cpu"
    monitor = "Monitor"
    printer = "Printer"
    ups = "UPS"


class status (enum.Enum):
    recieve = "recieve"
    review = "review"
    repair_in_progress = "repair_in_progress"
    cancel = "cancel"
    finish = "finish"


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=(True))
    code = db.Column(db.String(80), unique=True, nullable=False)
    type = db.Column(db.Enum(type), nullable=False)
    brand = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    serial_number = db.Column(db.String(150), nullable=False)
    status = db.Column(db.Enum(status), nullable=False)
    issues = db.Column(db.String(500), nullable=False)
    comments = db.Column(db.String(1000))
    time_stamp = db.Column(db.DateTime(timezone=True), nullable=False)
    id_technical = db.Column(
        db.Integer, db.ForeignKey(User.id))
    id_client = db.Column(db.Integer, db.ForeignKey(Client.id), nullable=False)
    technical = db.relationship(User)
    client = db.relationship(Client)

    def __repr__(self):
        return f'<Job {self.code}>'

    def serialize(self):
        return {
            "id": self.id,
            "code": self.code,
            "type": self.type.value,
            "brand": self.brand,
            "model": self.model,
            "serial_number": self.serial_number,
            "status": self.status.value,
            "issues": self.issues,
            "comments": self.comments,
            "time_stamp": self.time_stamp,
            "technical": self.technical.serialize(),
            "client": self.client.serialize()
        }

    def save(self):

        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
