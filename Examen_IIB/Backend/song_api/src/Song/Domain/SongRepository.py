from abc import ABC, abstractmethod
from typing import List



class SongRepository(ABC):
    @abstractmethod
    def add_song(self, name: str, duration: float, artist:str, album: str, year: int, genre: str) -> None:
        pass
    def get_song(self, name: str) -> None:
        pass
    def get_songs(self) -> List[str]:
        pass
