const fs = require('fs')

console.log('PRIMERO')
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) =>{
        console.log('Segundo')
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo primer archivo');
        } else {
            fs.readFile()
        }
    }
)
if('errorLecturaPrimerArchivo');


//funciones que devueklven algo se llaman callback


//Funciones Await y async
//Reglas
/*
1) Estar dentro de una función (nombrada o anónima)
2) 
 */
