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

class ProductoDAO:
    def __init__(self, conexion):
        self.conexion = conexion

    def crear_producto(self, nombre_producto, precio_producto, temporalidad_producto):
        consulta = "INSERT INTO productos (nombre_producto, precio_producto, temporalidad_producto) VALUES (%s, %s, %s)"
        parametros = (nombre_producto, precio_producto, temporalidad_producto)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def eliminar_producto(self, id_producto):
        consulta = "DELETE FROM productos WHERE id = %s"
        parametros = (id_producto,)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def actualizar_producto(self, id_producto, nombre_producto, precio_producto, temporalidad_producto):
        consulta = "UPDATE productos SET nombre_producto = %s, precio_producto = %s, temporalidad_producto = %s WHERE id = %s"
        parametros = (nombre_producto, precio_producto, temporalidad_producto, id_producto)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def consultar_producto(self, id_producto):
        consulta = "SELECT * FROM productos WHERE id = %s"
        parametros = (id_producto,)
        cursor = self.conexion.conn.cursor()
        cursor.execute(consulta, parametros)
        producto = cursor.fetchone()
        cursor.close()
        return producto

# Ejemplo de uso
conexion = Conexion("tu_host", "tu_puerto", "tu_nombre_de_base_de_datos", "tu_usuario", "tu_contraseña")
conexion.conectar()

producto_manager = ProductoDAO(conexion)

# Crear un producto
producto_manager.crear_producto("Teléfono", 499.99, "Mensual")

# Consultar un producto
producto = producto_manager.consultar_producto(1)
print(producto)

# Actualizar un producto
producto_manager.actualizar_producto(1, "Tablet", 299.99, "Anual")

# Eliminar un producto
producto_manager.eliminar_producto(1)

conexion.desconectar()
