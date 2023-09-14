class Cliente:
    def __init__(self, id, nombre, apellido, cedula_cliente, telefono, email):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.cedula_cliente = cedula_cliente
        self.telefono = telefono
        self.email = email

    def __str__(self):
        return f"ID: {self.id}\nNombre: {self.nombre}\nApellido: {self.apellido}\nCédula del Cliente: {self.cedula_cliente}\nTeléfono: {self.telefono}\nEmail: {self.email}"
