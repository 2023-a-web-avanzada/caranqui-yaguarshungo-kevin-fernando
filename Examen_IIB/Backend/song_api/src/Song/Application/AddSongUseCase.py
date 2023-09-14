from src.Song.Domain.SongRepository import SongRepository
import inject

class AddSongUseCase:
    @inject.autoparams()
    def __init__(self, song_repository: SongRepository):
        self.song_repository = song_repository
        
    def execute(self, name: str, duration: float, artist: str, album: str, year: int, genre: str) -> None:
        self.song_repository.add_song(name, duration, artist, album, year, genre)
