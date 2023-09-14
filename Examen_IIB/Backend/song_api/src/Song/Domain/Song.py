from src.Singer.Domain.Singer import Singer
from src.Shared.Model import Model

class Song(Model):
    _id: str
    name: str
    duration: float
    artist: Singer
    album: str
    year: int
    genre: str

    