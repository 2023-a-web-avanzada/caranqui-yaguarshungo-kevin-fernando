from abc import ABC, abstractmethod
from typing import List

class SingerRepository(ABC):
    @abstractmethod
    def add_singer(self, name:str) -> None:
        pass