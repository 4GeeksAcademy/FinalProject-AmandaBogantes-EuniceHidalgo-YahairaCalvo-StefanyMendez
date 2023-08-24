import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    #role = db.Column(db.String(Roles, name="role"), nullable=False)
    question_security = db.Column(db.String(150), nullable=False)
    answer_security = db.Column(db.String(150), nullable=False)

    def __repr__(self):
        return f'<User {self.first_name +" "+  self.last_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            #"role":self.role,
            "question_security": self.question_security
            # do not serialize the password, its a security breach
        }
          
    def save(self):
        db.session.add(self)
        db.commit()
    
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
    
    def __serialize__(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone
        }
        
    def save(self):
        db.session.add(self)
        db.commit()
    
    def update(self):
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit() 

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=(True))
    code = db.Column(db.String(80), unique=True, nullable=False)
    #type = db.Column(db.Enum("laptop", "monitor", "cpu", "printer", "ups", name="type"), nullable=False)
    brand = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    serial_number = db.Column(db.String(150), nullable=False)
    #status = db.Column(db.Enum("recieve", "review", "repair_in_progress", "cancel", "finish", name="status"), nullable=False)
    issues = db.Column(db.String(500), nullable=False)
    comments = db.Column(db.String(1000), nullable=False)
    time_stamp = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    id_technical = db.Column(db.Integer, db.ForeignKey(User.id))
    id_client = db.Column(db.Integer, db.ForeignKey(Client.id))
    technical = db.relationship(User)
    client = db.relationship(Client)
    
    def __repr__(self):
        return f'<Job {self.code}>'
    
    def __serialize__(self):
        return{
            "id": self.id,
            "code": self.code,
            #"type": self.type,
            "brand": self.brand,
            "model": self.model,
            "serial_number": self.serial_number,
            #"status": self.status,
            "issues": self.issues,
            "comment": self.comments,
            "time_stamps": self.time_stamp,
            "technical": self.technical,
            "client": self.client
        }
    
    
    def save(self):
        db.session.add(self)
        db.commit()
    
    def update(self):
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()