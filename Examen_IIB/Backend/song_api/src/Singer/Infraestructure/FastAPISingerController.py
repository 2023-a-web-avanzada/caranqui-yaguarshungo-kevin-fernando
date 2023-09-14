from fastapi import APIRouter

from src.Shared.Singleton import singleton
from src.Singer.Application.AddSingerUseCase import AddSingerUseCase


router = APIRouter()
@singleton
class FastAPISingerController():
    def __init__(self):
        self.add_singer_use_case = AddSingerUseCase()
    
    def add_singer(self, name:str) -> None:
        self.add_singer_use_case.execute(name=name)

def singer_controller() -> FastAPISingerController:
    return FastAPISingerController()

@router.post("/add_singer")
def add_singer(name:str) -> None:
    singer_controller().add_singer(name=name)
    return None
