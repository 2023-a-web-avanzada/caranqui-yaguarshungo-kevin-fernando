class Factura:
    def __init__(self, id, id_producto, id_cliente, fecha_emision, detalle_cliente, detalle_producto):
        self.id = id
        self.id_producto = id_producto
        self.id_cliente = id_cliente
        self.fecha_emision = fecha_emision
        self.detalle_cliente = detalle_cliente
        self.detalle_producto = detalle_producto

    def __str__(self):
        return f"ID de Factura: {self.id}\nID de Producto: {self.id_producto}\nID de Cliente: {self.id_cliente}\nFecha de Emisión: {self.fecha_emision}\nDetalle del Cliente:\n{self.detalle_cliente}\nDetalle del Producto:\n{self.detalle_producto}"
