//08-promesas.js
const fs = require('fs');
function leerArchivo(path){
    return new Promise(
        (resolve, reject) =>{
            fs.readFile(
                path, //nombre del archivo
                'utf-8',
                (errorLectura, contenido) => {
                    if(errorLectura){
                        console.error(errorLectura);
                        reject('Error Leyendo Primer Archivo');
                    }else{
                        resolve(contenido);
                    }
                }
            )
        }
    )
}
function escribirArchivo(path, nuevoContenido){
    return new Promise(
        (resolve, reject) =>{
            fs.writeFile(
                path,
                nuevoContenido,
                (errorEscritura) => {
                    if(errorEscritura){
                        console.error(errorEscritura);
                        reject('Escritura Fallida');
                    } else {
                        resolve('Completado');
                    }
                }
            )
        }
    )
}
function ejercicio(
    pathArchivo1,
    pathArchivo2,
    pathNuevoArchivo
){
    leerArchivo(pathArchivo1)
        .then(
            (contenidoPrimerArchivo) =>{
                contenidoTotal = contenidoTotal + contenidoPrimerArchivo;
                return leerArchivo(pathArchivo2);
            }
        )
        .then(
            (contenidoSegundoArchivo) =>{
                contenidoTotal = contenidoTotal + contenidoSegundoArchivo;
                return escribirArchivo(pathNuevoArchivo, contenidoTotal);
            }
        )
        .catch(error => console.error(error))
}

//solucion sencilla
// async -- await
// No podemos usar fuera de una funcion
// 1) Estar dentro una función (nombrada o anonima)
// 2) Arregre la palabra async antes de la declaracion de la funcion
// 3)  Agregar la palabra await antes de la declarion de la promesa

async function ejercicioAwait(){
    const path1 = '01-variables.js';
    const path2 = '02-arreglos.js';
    const path3 = '03-ejemplo-respuesta.txt'
    //hacemos que se detenga hasta que se responda la promesa
    try{
        const contenido1 = await leerArchivo(path1);  //nops devolvia una promesa // si queremos esperar hasta que nos devuelva algo
        const contenido2 = await leerArchivo(path2); //transformamos la leche o el pan en caramelito
        const contenidoTotal = contenido1 + contenido2; //importante siempre poner el await dentro de un try cath
        await escribirArchivo(path3, contenidoTotal);
        //await convierte a nuestras funciones asincronas en sincronas
    }catch (e){
        console.log(e);
    }
}