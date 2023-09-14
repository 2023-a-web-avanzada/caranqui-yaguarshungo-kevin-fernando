from fastapi import APIRouter, FastAPI
from pydantic import BaseModel
from typing import List
from DAO.BillDAO import BillDAO
# Definir el modelo Pydantic para Factura
class Factura(BaseModel):
    id: int
    id_producto: int
    id_cliente: int
    fecha_emision: str
    detalle_cliente: str
    detalle_producto: str

# Crear una instancia del DAO de Factura
router = APIRouter()	
factura_dao = BillDAO()  # Asegúrate de tener una clase FacturaDAO definida

# Crear una factura
@router.post("/facturas/")
def crear_factura(factura: Factura):
    return factura_dao.crear(factura)

# Consultar todas las facturas
@router.get("/facturas/")
def consultar_facturas():
    return factura_dao.consultar_todos()

# Consultar una factura por ID
@router.get("/facturas/{factura_id}")
def consultar_factura(factura_id: int):
    factura = factura_dao.consultar_por_id(factura_id)
    if factura:
        return factura
    return {"mensaje": "Factura no encontrada"}

# Actualizar una factura por ID
@router.put("/facturas/{factura_id}")
def actualizar_factura(factura_id: int, factura_actualizada: Factura):
    if factura_dao.actualizar(factura_id, factura_actualizada):
        return {"mensaje": "Factura actualizada"}
    return {"mensaje": "Factura no encontrada"}

# Eliminar una factura por ID
@router.delete("/facturas/{factura_id}")
def eliminar_factura(factura_id: int):
    if factura_dao.eliminar(factura_id):
        return {"mensaje": "Factura eliminada"}
    return {"mensaje": "Factura no encontrada"}
