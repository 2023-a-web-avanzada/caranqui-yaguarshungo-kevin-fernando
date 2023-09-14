from fastapi import FastAPI
from Controller.BillController import Factura
from Controller.ClientControlle import Cliente
from Controller.ProductController import Producto
from Controller.UserController import Usuario

app = FastAPI()

# Agregar rutas de usuario
app.include_router(Usuario.router)

# Agregar rutas de producto
app.include_router(Producto.router)

# Agregar rutas de cliente
app.include_router(Cliente.router)

# Agregar rutas de factura
app.include_router(Factura.router)
