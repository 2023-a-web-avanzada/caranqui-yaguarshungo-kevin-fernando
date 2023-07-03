//Create
async function add(nuevoNombre, nuevaCantante, callback){
    const fs = require('fs');

    const nuevaCancion = {
        nombre: nuevoNombre,
        cantante: nuevaCantante
    };

    fs.readFile('canciones.json', 'utf-8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            return;
        }

        try {
            const contenido = JSON.parse(data);
            contenido.canciones.push(nuevaCancion); // Agregar la nueva canción al array de canciones

            const contenidoActualizado = JSON.stringify(contenido, null, 2); // Convertir el objeto actualizado a JSON con formato legible

            fs.writeFile('canciones.json', contenidoActualizado, 'utf-8', (error) => {
                if (error) {
                    console.error('Error al escribir en el archivo:', error);
                    return;
                }
                console.log('Nueva canción agregada correctamente');
            });
            if(callback){
                console.log('------------------------')
                callback();
            }
        } catch (parseError) {
            console.error('Error al parsear el contenido JSON:', parseError);
        }
    });


}
// READ
async function read(callback){
    const fs = require('fs');
    fs.readFile('./canciones.json', 'utf-8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            return;
        }

        try {
            const contenido = JSON.parse(data);
            const canciones = contenido.canciones;
            var bandera = false;
            var nombreEncontrado = ''
            var CantanteEncontrado = ''
            canciones.forEach((cancion) => {
                const nombre = cancion.nombre;
                const cantante = cancion.cantante;
                console.log('Nombre:', nombre);
                console.log('Autor:', cantante);
                console.log('------------------------')
            });
            if(callback){
                console.log('------------------------')
                callback();
            }
            //console.log(contenido)
        } catch (parseError) {
            console.error('Error al parsear el contenido JSON:', parseError);
        }
    });
}
async function search(nombreABuscar, callback){
    const fs = require('fs');
    fs.readFile('canciones.json', 'utf-8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            return;
        }

        try {
            //const contenido = JSON.parse(read())
            const contenido = JSON.parse(data);
            const canciones = contenido.canciones;
            var bandera = false;
            var nombreEncontrado = ''
            var CantanteEncontrado = ''
            canciones.forEach((cancion) => {
                const nombre = cancion.nombre;
                const cantante = cancion.cantante;
                //console.log('Nombre:', nombre);
                //console.log('Autor:', cantante);
                if(nombreABuscar == nombre){
                    bandera=true
                    nombreEncontrado = nombre
                    CantanteEncontrado = cantante
                }
            });
            if (bandera) {
                console.log('--------------------')
                console.log("Se ha encontrado la canción \nDetalles:\n");
                console.log(nombreEncontrado)
                console.log(CantanteEncontrado)
                console.log('--------------------')
            }else {
                console.log('No se Encontró')
            }
            if(callback){
                console.log('------------------------')
                callback();
            }
        } catch (parseError) {
            console.error('Error al parsear el contenido JSON:', parseError);
        }
    });

}
//Update
async function updateSong(cancionAActualizar, nuevoNombre, nuevoCantante, callback) {
    const fs = require('fs');

    fs.readFile('canciones.json', 'utf-8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            return;
        }

        try {
            const contenido = JSON.parse(data);
            const canciones = contenido.canciones;

            // Buscar la canción en el array
            const cancion = canciones.find((cancion) => cancion.nombre === cancionAActualizar);

            if (cancion) {
                // Actualizar las propiedades de la canción
                cancion.nombre = nuevoNombre;
                cancion.cantante = nuevoCantante;

                const contenidoActualizado = JSON.stringify(contenido, null, 2); // Convertir el objeto actualizado a JSON con formato legible

                fs.writeFile('canciones.json', contenidoActualizado, 'utf-8', (error) => {
                    if (error) {
                        console.error('Error al escribir en el archivo:', error);
                        return;
                    }
                    console.log('Canción actualizada correctamente');
                });
            } else {
                console.log('La canción no existe en el archivo');
            }
            if(callback){
                console.log('------------------------')
                callback();
            }
        } catch (parseError) {
            console.error('Error al parsear el contenido JSON:', parseError);
        }
    });
}
//Delete
async function deleteSong(cancionAEliminar, callback) {
        const fs = require('fs');

        fs.readFile('canciones.json', 'utf-8', (error, data) => {
            if (error) {
                console.error('Error al leer el archivo:', error);
                return;
            }

            try {
                const contenido = JSON.parse(data);
                const canciones = contenido.canciones;

                // Buscar la canción en el array
                const indiceCancion = canciones.findIndex((cancion) => cancion.nombre === cancionAEliminar);

                if (indiceCancion !== -1) {
                    // Eliminar la canción del array
                    canciones.splice(indiceCancion, 1);

                    const contenidoActualizado = JSON.stringify(contenido, null, 2); // Convertir el objeto actualizado a JSON con formato legible

                    fs.writeFile('canciones.json', contenidoActualizado, 'utf-8', (error) => {
                        if (error) {
                            console.error('Error al escribir en el archivo:', error);
                            return;
                        }
                        console.log('Canción eliminada correctamente');
                    });
                } else {
                    console.log('La canción no existe en el archivo');
                }
                if(callback){
                    console.log('------------------------')
                    callback();
                }
            } catch (parseError) {
                console.error('Error al parsear el contenido JSON:', parseError);
            }
        });

    }

//===========PRUEBAS==================\\
//console.log(add('Let Me Love You', 'Justin Bieber'))
//console.log(read())
//read()
//console.log(search('Imagine'))
//console.log(updateSong('Let Me Love You', 'Cold Water', 'Justin Bieber'))
//console.log(deleteSong('Cold Water'))

const readline = require('readline');

// Crea una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar el menú
function mostrarMenu() {
    console.log('Menú:');
    console.log('1. Ver mis Canciones');
    console.log('2. Buscar una Canción');
    console.log('3. Agregar una Canción');
    console.log('4. Actualizar una canción');
    console.log('5. Eliminar una canción');
    console.log('6. Salir');
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            read(() => {
               inicio();
            });

            break;
        case '2':
            rl.question('Ingresa el nombre de la canción: ', (nombre) =>{
                search(nombre, () => {
                    inicio();
                });
            });
            break;
        case '3':
            rl.question('Ingresa el nombre de la canción: ', (nombre) => {
                rl.question('Ingresa el nombre del autor: ', (cantante) => {
                    add(nombre, cantante, () =>{
                        inicio();
                    });
                });
            });
            break;
        case '4':
            rl.question('Ingresa el nombre de la canción: ', (nombreABuscar) => {
                search(nombreABuscar, () => {
                    rl.question('Ingresa el nuevo nombre de la canción: ', (nuevoNombre) => {
                        rl.question('Ingresa el nuevo nombre del autor: ', (nuevoAutor) =>{
                            updateSong(nuevoNombre, nuevoAutor, () =>{
                                inicio();
                            });
                        });
                    });
                });
            });
            break;
        case '5':
            rl.question('Ingresa el nombre de la canción: ', (nombreCancion) => {
                deleteSong(nombreCancion, () =>{
                    inicio();
                });
            });
            break;
        case '6':
            rl.close();
            console.log('Finalizando el programa...');
            process.exit(0);
            break;
        default:
            console.log('Opción inválida');
            inicio();
    }
}

function inicio(){
    mostrarMenu();
    rl.question('Selecciona una opción: ', (opcion) => {
        manejarOpcion(opcion);
    });
}
inicio();
