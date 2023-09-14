from src.Singer.Domain.SingerRepository import SingerRepository
import inject
class AddSingerUseCase:
    @inject.autoparams()
    def __init__(self, singer_repository: SingerRepository):
        self.singer_repository = singer_repository

    def execute(self, name:str) -> None:
        self.singer_repository.add_singer(name)