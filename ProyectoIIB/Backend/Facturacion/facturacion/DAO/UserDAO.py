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

class UsuarioDAO:
    def __init__(self, conexion):
        self.conexion = conexion

    def crear_usuario(self, nombre, apellido, cedula):
        consulta = "INSERT INTO usuarios (nombre, apellido, cedula) VALUES (%s, %s, %s)"
        parametros = (nombre, apellido, cedula)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def eliminar_usuario(self, id_usuario):
        consulta = "DELETE FROM usuarios WHERE id = %s"
        parametros = (id_usuario,)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def actualizar_usuario(self, id_usuario, nombre, apellido, cedula):
        consulta = "UPDATE usuarios SET nombre = %s, apellido = %s, cedula = %s WHERE id = %s"
        parametros = (nombre, apellido, cedula, id_usuario)
        self.conexion.ejecutar_consulta(consulta, parametros)

    def consultar_usuario(self, id_usuario):
        consulta = "SELECT * FROM usuarios WHERE id = %s"
        parametros = (id_usuario,)
        cursor = self.conexion.conn.cursor()
        cursor.execute(consulta, parametros)
        usuario = cursor.fetchone()
        cursor.close()
        return usuario

# Ejemplo de uso
conexion = Conexion("tu_host", "tu_puerto", "tu_nombre_de_base_de_datos", "tu_usuario", "tu_contraseña")
conexion.conectar()

user_manager = UsuarioDAO(conexion)

# Crear un usuario
user_manager.crear_usuario("Juan", "Perez", "1234567890")

# Consultar un usuario
usuario = user_manager.consultar_usuario(1)
print(usuario)

# Actualizar un usuario
user_manager.actualizar_usuario(1, "Juan", "Gomez", "0987654321")

# Eliminar un usuario
user_manager.eliminar_usuario(1)

conexion.desconectar()
