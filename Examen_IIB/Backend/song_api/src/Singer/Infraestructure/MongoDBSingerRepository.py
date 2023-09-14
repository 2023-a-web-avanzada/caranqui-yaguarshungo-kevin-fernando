from src.Shared.MongoDBConnection import MongoDBConnection
from src.Singer.Domain.SingerRepository import SingerRepository


class MongoDBSingerRepository(SingerRepository):
    db = MongoDBConnection().get_db()
    singer_collection = db["Singer"]

    def add_singer(self, name:str) -> None:
        #add singer to db
        self.singer_collection.insert_one({"name": name})
    