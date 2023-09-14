class Usuario:
    def __init__(self, id, nombre, apellido, cedula, nombre_usuario, contrasena):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.cedula = cedula
        self.nombre_usuario = nombre_usuario
        self.contrasena = contrasena

    def __str__(self):
        return f"ID: {self.id}\nNombre: {self.nombre}\nApellido: {self.apellido}\nCedula: {self.cedula}\nNombre de Usuario: {self.nombre_usuario}\nContraseña: {self.contrasena}"
