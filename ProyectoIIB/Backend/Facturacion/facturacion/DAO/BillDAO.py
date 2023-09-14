import psycopg2

class Conexion:
    def __init__(self, host, port, dbname, user, password):
        self.host = host
        self.port = port
        self.dbname = dbname
        self.user = user
        self.password = password
        self.conn = None

    def conectar(self):
        try:
            self.conn = psycopg2.connect(
                host=self.host,
                port=self.port,
                dbname=self.dbname,
                user=self.user,
                password=self.password
            )
        except psycopg2.Error as e:
            print("Error al conectar a la base de datos:", e)

    def desconectar(self):
        if self.conn is not None:
            self.conn.close()

    def ejecutar_consulta(self, consulta, parametros=None):
        try:
            cursor = self.conn.cursor()
            cursor.execute(consulta, parametros)
            self.conn.commit()
            cursor.close()
        except psycopg2.Error as e:
            print("Error al ejecutar la consulta:", e)

class BillDAO:
    def __init__(self, conexion):
        self.conexion = conexion

    def crear_factura(self, id_producto, id_cliente, fecha_emision, detalle_cliente, detalle_producto):
        consulta = "INSERT INTO facturas (id_producto, id_cliente, fecha_emision, detalle_cliente, detalle_producto) VALUES (%s, %s, %s, %s, %s)"
        parametros = (id_producto, id_cliente, fecha_emision, detalle_cliente, detalle_producto)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def eliminar_factura(self, id_factura):
        consulta = "DELETE FROM facturas WHERE id = %s"
        parametros = (id_factura,)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def actualizar_factura(self, id_factura, id_producto, id_cliente, fecha_emision, detalle_cliente, detalle_producto):
        consulta = "UPDATE facturas SET id_producto = %s, id_cliente = %s, fecha_emision = %s, detalle_cliente = %s, detalle_producto = %s WHERE id = %s"
        parametros = (id_producto, id_cliente, fecha_emision, detalle_cliente, detalle_producto, id_factura)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def consultar_factura(self, id_factura):
        consulta = "SELECT * FROM facturas WHERE id = %s"
        parametros = (id_factura,)
        cursor = self.conexion.conn.cursor()
        cursor.execute(consulta, parametros)
        factura = cursor.fetchone()
        cursor.close()
        return factura

# Ejemplo de uso
conexion = Conexion("host", "puerto", "bd", "admin", "1234")
conexion.conectar()

factura_manager = BillDAO(conexion)

# Crear una factura
factura_manager.crear_factura(1, 1, "2023-09-13", "Detalle del cliente", "Detalle del producto")

# Consultar una factura
factura = factura_manager.consultar_factura(1)
print(factura)

# Actualizar una factura
factura_manager.actualizar_factura(1, 2, 2, "2023-09-14", "Nuevo detalle del cliente", "Nuevo detalle del producto")

# Eliminar una factura
factura_manager.eliminar_factura(1)

conexion.desconectar()
