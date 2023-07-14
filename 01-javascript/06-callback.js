const fs = require('fs')

console.log('Primero');
/*
fs.readFile(
    './06-ejemplo.tx', //Nombre o path del archivo
    'utf-8', //codificación
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('Segundo')
    }
);*/
fs.readFile(
    './06-ejemplo.tx', //Nombre o path del archivo
    'utf-8', //codificación
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('Segundo')
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('error leyendo primer Archivo');
        } else {
            fs.readFile(
                '/0.1-variables.js', //nombre o path del archivo
                'utf-8', //codificación
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) =>{
                    fs.writeFile(
                        './06-nuevo-archivo.tx',
                        nuevoContenido,
                        (errorEscritura) =>{
                            if (errorEscritura) {
                                console.log('Ocurrió un error al escribir el archivo:', errorEscritura);
                            } else {
                                console.log('El archivo se ha escrito correctamente.');
                            }
                        }
                    )
                }
            )
        }
    }
);
console.log('Tercero');
//fs.readFile no es un caramelo porque estamos comunicando con otro proceso, es decir, pregunta a alguien, depede.
//una suma es un caramelito
//un for es un caramelito porque no estoy preguntando a nadie del proceso, lo mismo con un while.
//Primero respondo a los carameitos que puedo responder, por eso "Segundo se queda en espera"
//Si una funcion se comunica con un proceso externo entonces es un pan o leche.
//Todos los operadores son caramelitos.

//A las funciones que devuelvemn algo se llaman callback(); es decir, este tipo de funciones devuelve algo después de
// hacer algo.
//Un callback es async. Si es async es pan o leche.
//Este tipo de funciones se pueden aplicar a cualquier tipo de lenguaje.

//si quiero escribir un archivo es una leche o pan


