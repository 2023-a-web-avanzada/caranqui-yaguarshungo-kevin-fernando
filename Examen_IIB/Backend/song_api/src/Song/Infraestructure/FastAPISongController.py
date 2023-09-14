from typing import List
from fastapi import APIRouter, HTTPException
from src.Song.Application.GetSongsUseCase import GetSongsUseCase

from src.Song.Application.GetSongUseCase import GetSongUseCase
from src.Shared.Singleton import singleton
from src.Song.Application.AddSongUseCase import AddSongUseCase

router = APIRouter()

@singleton
class FastAPISongController():
    def __init__(self):
        self.add_song_use_case = AddSongUseCase()
        self.get_song_use_case = GetSongUseCase()
        self.get_songs_use_case = GetSongsUseCase()
        
    def add_song(self, name: str, duration: float, artist: str, album: str, year: int, genre: str) -> None:
        self.add_song_use_case.execute(name, duration, artist, album, year, genre)

    def get_song(self, name: str) -> None:
        return self.get_song_use_case.execute(name)

    def get_songs(self) -> List[str]:
        return self.get_songs_use_case.execute()
     
def song_controller() -> FastAPISongController:
    return FastAPISongController()

@router.post("/add_song")
def add_song(name: str, duration: float, artist: str, album: str, year: int, genre: str) -> None:
    song_controller().add_song(name, duration, artist, album, year, genre)
    return None

@router.get("/get_song")
def get_song(name: str) -> None:
    song = song_controller().get_song(name)
    if song is None:
        raise HTTPException(status_code=404, detail="Song not found")
    return song

@router.get("/get_songs")
def get_songs() -> List[str]:
    return song_controller().get_songs()

