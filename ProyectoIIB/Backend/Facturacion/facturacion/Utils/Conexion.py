# import psycopg2

# # Parámetros de conexión a la base de datos
# db_host = "tu_host"  
# db_port = "tu_puerto"  
# db_name = "tu_nombre_de_base_de_datos"  
# db_user = "tu_usuario"  
# db_password = "tu_contraseña" 

# try:
#     conn = psycopg2.connect(
#         host=db_host,
#         port=db_port,
#         dbname=db_name,
#         user=db_user,
#         password=db_password
#     )
#     print("Conexión exitosa a la base de datos PostgreSQL")
#     cursor = conn.cursor()
#     cursor.close()
#     conn.close()

# except psycopg2.Error as e:
#     print("Error al conectar a la base de datos PostgreSQL:", e)
