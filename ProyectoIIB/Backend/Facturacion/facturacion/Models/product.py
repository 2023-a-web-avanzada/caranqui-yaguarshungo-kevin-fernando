class Producto:
    def __init__(self, id, id_cliente, nombre_producto, precio_producto, temporalidad_producto):
        self.id = id
        self.id_cliente = id_cliente
        self.nombre_producto = nombre_producto
        self.precio_producto = precio_producto
        self.temporalidad_producto = temporalidad_producto

    def __str__(self):
        return f"ID: {self.id}\nID del Cliente: {self.id_cliente}\nNombre del Producto: {self.nombre_producto}\nPrecio del Producto: {self.precio_producto}\nTemporalidad del Producto: {self.temporalidad_producto}"
