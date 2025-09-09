from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
import time

router = APIRouter()

class PostOut(BaseModel):
    id: str
    author: str
    caption: str
    created_at: float
    audio_tag: str | None = None
    is_challenge: bool = False

# Minimal in-memory posts
POSTS = [
    {'id': 'p1','author':'alice','caption':'Welcome to TellSpace','created_at': time.time()},
    {'id': 'p2','author':'bob','caption':'First challenge!','created_at': time.time(), 'audio_tag': 'beat-1', 'is_challenge': True},
]

@router.get('/', response_model=List[PostOut])
def list_posts(limit: int = 20, offset: int = 0):
    return POSTS[offset:offset+limit]
