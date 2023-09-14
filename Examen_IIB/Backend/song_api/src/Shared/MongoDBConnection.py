from pymongo import MongoClient
import os
from dotenv import load_dotenv
from src.Shared.Singleton import singleton

load_dotenv()
mongo_url = 'localhost'
mongo_port = '27017'
mongo_user = 'admin'
mongo_password = 'password123'
mongo_database = 'SongSinger'
mongo_uri = f"mongodb://{mongo_user}:{mongo_password}@{mongo_url}:{mongo_port}/?authMechanism=DEFAULT"


@singleton
class MongoDBConnection:
    def __init__(self):
        self.client = MongoClient(mongo_uri)
        self.db = self.client[mongo_database]

    def get_db(self):
        return self.db
