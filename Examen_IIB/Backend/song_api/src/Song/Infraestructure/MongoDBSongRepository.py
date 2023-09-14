
from typing import List
from src.Song.Domain.SongFactory import SongFactory
from src.Song.Domain.SongRepository import SongRepository
from src.Shared.MongoDBConnection import MongoDBConnection
from bson import ObjectId


class MongoDBSongRepository(SongRepository):
    db = MongoDBConnection().get_db()
    song_collection = db["Song"]
    singer_collection = db["Singer"]

    def add_song(self, name: str, duration: float, artist:str, album: str, year: int, genre: str) -> None:
        #search singer
        singer = self.singer_collection.find_one({"name": artist})
        if singer is None:
            raise Exception("Singer not found")
        #add song to db
        self.song_collection.insert_one({"name": name, "duration": duration, "artist": singer["_id"], "album": album, "year": year, "genre": genre})
        #add song to singer
        self.singer_collection.update_one({"_id": singer["_id"]}, {"$push": {"songs": name}})
        

    def get_song(self, name: str) -> None:
        #search song
        song = self.song_collection.find_one({"name": name})
        print(song)
        #create song object
        if song is None:
            return None
        singer = self.singer_collection.find_one({"_id": song["artist"]})
        return {"name": song["name"], "duration": song["duration"], "artist": singer["name"], "album": song["album"], "year": song["year"], "genre": song["genre"]}
    
    def get_songs(self) -> List[str]:
        #consultamos todas las canciones
        songs = []
        for song in self.song_collection.find():
            singer = self.singer_collection.find_one({"_id": song["artist"]})
            #creamos el objeto cancion usando SongFactory
            song = SongFactory.create(song["name"], song["duration"], singer["name"], song["album"], song["year"], song["genre"])
            #transformamos el objeto cancion a un diccionario
            song = song.to_dict()
            #agregamos la cancion a la lista
            songs.append(song)
        return songs