from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name = db.Column(db.string(80)), unique=False, nullable=True)
    last_name = db.Column(db.string(80)), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        # Do not serialize the password, its a security breach
        return {"id": self.id,
                "email": self.email,
                'is_active': self.is_active}
    
class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, unique=False, nullable=False)
    description = db.Column(db.String, unique=False, nullable=False)
    body = db.Column(db.String, unique=False, nullable=False)
    date = db.Column(db.DateTime, nullable=False) # Valor por defecto
    image_url = db.Column(db.String)  # url, La obtenemos de cloudinary


class Coments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String, unique=False, nullable=False)


class Medias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum('image', 'video', 'podcast', name='media_type'))


class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    

class CharactersFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    

class PlanetFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class Characters(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    

class Planets(db.Model):
    id = db.Column(db.Integer, primary_key=True)

# Model Table    