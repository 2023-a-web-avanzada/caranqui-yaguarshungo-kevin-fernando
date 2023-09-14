from fastapi import APIRouter
from src.Singer.Infraestructure.FastAPISingerController import router as singer_router
from src.Song.Infraestructure.FastAPISongController import router as song_router

api_router = APIRouter()

api_router.include_router(singer_router, prefix="/singer", tags=["singer"])
api_router.include_router(song_router, prefix="/song", tags=["song"])