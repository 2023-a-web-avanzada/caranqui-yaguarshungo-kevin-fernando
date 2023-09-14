from src.Song.Infraestructure.MongoDBSongRepository import MongoDBSongRepository
from src.Song.Domain.SongRepository import SongRepository
from src.Singer.Infraestructure.MongoDBSingerRepository import MongoDBSingerRepository
from src.Singer.Domain.SingerRepository import SingerRepository
import inject

def configure_ic()-> None:
    def configure(binder: inject.Binder) -> None:
        binder.bind(SingerRepository, MongoDBSingerRepository())
        binder.bind(SongRepository, MongoDBSongRepository())
    inject.configure(configure)
        