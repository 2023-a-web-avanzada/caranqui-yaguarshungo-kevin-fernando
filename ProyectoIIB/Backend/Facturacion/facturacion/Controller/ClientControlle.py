from fastapi import APIRouter, FastAPI
from pydantic import BaseModel
from typing import List
from DAO.ClientDAO import ClienteDAO

router = APIRouter()
# Definir el modelo Pydantic para Cliente
class Cliente(BaseModel):
    id: int
    nombre: str
    apellido: str
    cedula_cliente: str
    telefono: str
    email: str

# Crear una instancia del DAO de Cliente
cliente_dao = ClienteDAO()  # Asegúrate de tener una clase ClienteDAO definida

# Crear un cliente
@router.post("/clientes/")
def crear_cliente(cliente: Cliente):
    return cliente_dao.crear(cliente)

# Consultar todos los clientes
@router.get("/clientes/")
def consultar_clientes():
    return cliente_dao.consultar_todos()

# Consultar un cliente por ID
@router.get("/clientes/{cliente_id}")
def consultar_cliente(cliente_id: int):
    cliente = cliente_dao.consultar_por_id(cliente_id)
    if cliente:
        return cliente
    return {"mensaje": "Cliente no encontrado"}

# Actualizar un cliente por ID
@router.put("/clientes/{cliente_id}")
def actualizar_cliente(cliente_id: int, cliente_actualizado: Cliente):
    if cliente_dao.actualizar(cliente_id, cliente_actualizado):
        return {"mensaje": "Cliente actualizado"}
    return {"mensaje": "Cliente no encontrado"}

# Eliminar un cliente por ID
@router.delete("/clientes/{cliente_id}")
def eliminar_cliente(cliente_id: int):
    if cliente_dao.eliminar(cliente_id):
        return {"mensaje": "Cliente eliminado"}
    return {"mensaje": "Cliente no encontrado"}
