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

class ClienteDAO:
    def __init__(self, conexion):
        self.conexion = conexion

    def crear_cliente(self, nombre, apellido, cedula_cliente, telefono, email):
        consulta = "INSERT INTO clientes (nombre, apellido, cedula_cliente, telefono, email) VALUES (%s, %s, %s, %s, %s)"
        parametros = (nombre, apellido, cedula_cliente, telefono, email)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def eliminar_cliente(self, id_cliente):
        consulta = "DELETE FROM clientes WHERE id = %s"
        parametros = (id_cliente,)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def actualizar_cliente(self, id_cliente, nombre, apellido, cedula_cliente, telefono, email):
        consulta = "UPDATE clientes SET nombre = %s, apellido = %s, cedula_cliente = %s, telefono = %s, email = %s WHERE id = %s"
        parametros = (nombre, apellido, cedula_cliente, telefono, email, id_cliente)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def consultar_cliente(self, id_cliente):
        consulta = "SELECT * FROM clientes WHERE id = %s"
        parametros = (id_cliente,)
        cursor = self.conexion.conn.cursor()
        cursor.execute(consulta, parametros)
        cliente = cursor.fetchone()
        cursor.close()
        return cliente

# Ejemplo de uso
conexion = Conexion("tu_host", "tu_puerto", "tu_nombre_de_base_de_datos", "tu_usuario", "tu_contraseña")
conexion.conectar()

cliente_manager = ClienteDAO(conexion)

# Crear un cliente
cliente_manager.crear_cliente("Juan", "Pérez", "1234567890", "555-123-4567", "juan@example.com")

# Consultar un cliente
cliente = cliente_manager.consultar_cliente(1)
print(cliente)

# Actualizar un cliente
cliente_manager.actualizar_cliente(1, "Ana", "Gómez", "0987654321", "555-987-6543", "ana@example.com")

# Eliminar un cliente
cliente_manager.eliminar_cliente(1)

conexion.desconectar()
