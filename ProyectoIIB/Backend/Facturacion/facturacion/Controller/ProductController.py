from fastapi import APIRouter, FastAPI
from pydantic import BaseModel
from typing import List
from DAO.ProductDAO import ProductoDAO

route = APIRouter()
# Definir el modelo Pydantic para Producto
class Producto(BaseModel):
    id: int
    id_cliente: int
    nombre_producto: str
    precio_producto: float
    temporalidad_producto: str

# Crear una instancia del DAO de Producto
producto_dao = ProductoDAO()  # Asegúrate de tener una clase ProductoDAO definida

# Crear un producto
@route.post("/productos/")
def crear_producto(producto: Producto):
    return producto_dao.crear(producto)

# Consultar todos los productos
@route.get("/productos/")
def consultar_productos():
    return producto_dao.consultar_todos()

# Consultar un producto por ID
@route.get("/productos/{producto_id}")
def consultar_producto(producto_id: int):
    producto = producto_dao.consultar_por_id(producto_id)
    if producto:
        return producto
    return {"mensaje": "Producto no encontrado"}

# Actualizar un producto por ID
@route.put("/productos/{producto_id}")
def actualizar_producto(producto_id: int, producto_actualizado: Producto):
    if producto_dao.actualizar(producto_id, producto_actualizado):
        return {"mensaje": "Producto actualizado"}
    return {"mensaje": "Producto no encontrado"}

# Eliminar un producto por ID
@route.delete("/productos/{producto_id}")
def eliminar_producto(producto_id: int):
    if producto_dao.eliminar(producto_id):
        return {"mensaje": "Producto eliminado"}
    return {"mensaje": "Producto no encontrado"}
