from src.Singer.Domain.Singer import Singer
from src.Song.Domain.Song import Song


class SongFactory:
    @staticmethod
    def create(
        _id: str,
        name: str,
        duration: float,
        artist: Singer,
        album: str,
        year: int,
        genre: str,
    )-> Song:
        return Song(
            _id=_id,
            name=name,
            duration=duration,
            artist=artist,
            album=album,
            year=year,
            genre=genre,
        )
    