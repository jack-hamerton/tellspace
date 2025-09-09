from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
from jose import jwt
import os, time

router = APIRouter()
pwd_ctx = CryptContext(schemes=['bcrypt'], deprecated='auto')
SECRET = os.getenv('SECRET_KEY', 'changeme')

# In-memory "db" for scaffold purposes
USERS = {}

class RegisterIn(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str

class LoginIn(BaseModel):
    email: EmailStr
    password: str

@router.post('/register')
def register(payload: RegisterIn):
    if payload.email in USERS:
        raise HTTPException(400, 'Email already registered')
    hashed = pwd_ctx.hash(payload.password)
    user = {
        'id': f'user_{len(USERS)+1:07d}',
        'first_name': payload.first_name,
        'last_name': payload.last_name,
        'email': payload.email,
        'password_hash': hashed,
        'role': 'user'
    }
    USERS[payload.email] = user
    return {'ok': True, 'user_id': user['id']}

@router.post('/login')
def login(payload: LoginIn):
    user = USERS.get(payload.email)
    if not user or not pwd_ctx.verify(payload.password, user['password_hash']):
        raise HTTPException(401, 'Invalid credentials')
    to_encode = {'sub': user['id'], 'email': user['email'], 'exp': int(time.time())+3600}
    token = jwt.encode(to_encode, SECRET, algorithm='HS256')
    return {'access_token': token, 'token_type': 'bearer'}

