
from src.Song.Domain.SongRepository import SongRepository
import inject 

class GetSongUseCase:
    @inject.autoparams()
    def _init_(self, song_repository: SongRepository):
        self.song_repository = song_repository
    
    def execute(self, name: str) -> None:
        return self.song_repository.get_song(name)