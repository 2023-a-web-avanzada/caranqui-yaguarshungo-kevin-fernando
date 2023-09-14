from typing import List
from src.Song.Domain.Song import Song
from src.Shared.Model import Model


class Singer(Model):
    _id: str
    name: str
    songs: List[Song]