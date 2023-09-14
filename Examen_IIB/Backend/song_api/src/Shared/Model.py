from pydantic import BaseModel, Extra

class Model(BaseModel, extra=Extra.allow):
    """"Base Model for all models"""