from typing import List
from Examen_IIB.Backend.song_api.src.Song.Domain.Song import Song
from src.Singer.Domain.Singer import Singer


class SingerFactory:
    @staticmethod
    def create(id: str, name:str, songs:List[Song]) -> Singer:
        return Singer(id, name, songs)