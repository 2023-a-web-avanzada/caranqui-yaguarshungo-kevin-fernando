from fastapi import APIRouter, FastAPI
from pydantic import BaseModel
from typing import List
from DAO.UserDAO  import UsuarioDAO

app = FastAPI()
router = APIRouter()
# Definir el modelo Pydantic para Usuario
class Usuario(BaseModel):
    id: int
    nombre: str
    apellido: str
    cedula: str
    nombre_usuario: str
    contrasena: str

# Crear una instancia del DAO de Usuario
usuario_dao = UsuarioDAO()  # Asegúrate de tener una clase UsuarioDAO definida

# Crear un usuario
@router.post("/usuarios/")
def crear_usuario(usuario: Usuario):
    return usuario_dao.crear(usuario)

# Consultar todos los usuarios
@router.get("/usuarios/")
def consultar_usuarios():
    return usuario_dao.consultar_todos()

# Consultar un usuario por ID
@router.get("/usuarios/{usuario_id}")
def consultar_usuario(usuario_id: int):
    usuario = usuario_dao.consultar_por_id(usuario_id)
    if usuario:
        return usuario
    return {"mensaje": "Usuario no encontrado"}

# Actualizar un usuario por ID
@router.put("/usuarios/{usuario_id}")
def actualizar_usuario(usuario_id: int, usuario_actualizado: Usuario):
    if usuario_dao.actualizar(usuario_id, usuario_actualizado):
        return {"mensaje": "Usuario actualizado"}
    return {"mensaje": "Usuario no encontrado"}

# Eliminar un usuario por ID
@router.delete("/usuarios/{usuario_id}")
def eliminar_usuario(usuario_id: int):
    if usuario_dao.eliminar(usuario_id):
        return {"mensaje": "Usuario eliminado"}
    return {"mensaje": "Usuario no encontrado"}
