from typing import List
from src.Song.Domain.SongRepository import SongRepository
import inject
class GetSongsUseCase:
    @inject.autoparams()
    def __init__(self, song_repository: SongRepository):
        self.song_repository = song_repository
    
    def execute(self) -> List[str]:
        return self.song_repository.get_songs()