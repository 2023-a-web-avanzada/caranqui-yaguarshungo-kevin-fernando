//OPERADORES
const arreglo = [
    { id: 1, nombre: 'Adrian', nota: 5
    },
    { id: 2, nombre: 'Vicente', nota: 8
    },
    { id: 3, nombre: 'Carolina', nota: 14
    },
    { id: 4, nombre: 'Wendy', nota: 16
    },
    { id: 5, nombre: 'Andrea', nota: 19
    },
    { id: 6, nombre: 'Pamela', nota: 19
    },
    { id: 7, nombre: 'Cristian', nota: 20
    },
    { id: 8, nombre: 'Daniel', nota: 19
    },
    { id: 9, nombre: 'Lilly', nota: 14
    },
    { id: 10, nombre: 'Ramiro', nota: 12
    }
];
//funcion que recibe otra funcion como parametro
//find
//enviamos un truty o un falsy
const respuestaFind = arreglo
    .find(
        function(valorActual, indiceActual, arregloConpleto){
            console.log('valor Actual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloConpleto);
            return  valorActual.nota < 5;
        }
    )
console.log(respuestaFind)



//OPERADOR FIND 22-05-2023
const respuestaFindIndex = arreglo
    .find(
        function (valorActual)
        {
            return valorActual.nota <5
        }
    );
console.log(respuestaFindIndex)

//foreach

const respuestaFindForeach = arreglo
    .find(
        function (varlorActual)
        {
            console.log(varlorActual)
        }
    );
console.log('respuestaFindForeach', respuestaFindForeach)

//operador MAP
//Permite modificar o iterar un nuevo arreglo
/*
Enviamos los dtos del nuevo arreglo
Devuelve el nuevo arreglo
 */
const respuestaMap = arreglo
    .map(
    function (valorActual)
    {
        const nuevaNota = {
            id: valorActual.id,
            nombre : valorActual.nombre,
            nota: valorActual.nota +1,
            estaAprobado: (valorActual.nota +1) > 14,
            resgistrado : true
        }
        return nuevaNota
    }
);

console.log('respuestaMAP' , respuestaMap)
console.log('arreglo', arreglo)


//FILTER
/*
Devuelve los elementos que complen con la condición
 */

const respuestaFilter = arreglo
    .filter(
        function (valorActual)
        {
           return valorActual.nota > 10
        }
    );

console.log('Esta es una Respuesta FILTER' , respuestaFilter)
console.log('arreglo', arreglo)

/*
SOME -> expresion
HAY ALGUNA X QUE CUMPLE CON ESTA CONDICION?
ES ALGUNO DE ESTOS CUMPLE CON ESTA CONDICION Y DEVUELVE UNA EXPRESION
 */
const respuestaSome = arreglo
    .some(
        function (valorActual)
        {
            return valorActual.nota > 10
        }
    );

console.log('Esta es una Respuesta Some' , respuestaSome)
console.log('arreglo', arreglo)
/*
    EVERY -> expresion
    devuelve boolean
*/
const respuestaEvery = arreglo
    .every(
        function (valorActual)
        {
            return valorActual.nota <= 10
        }
    );

console.log('Esta es una Respuesta Every' , respuestaEvery)
console.log('arreglo', arreglo)

/*
* Operador Reduce
* va de Izquierda a Derecha
*
* y Op. reduce RIGHT (ultima posición hacia atrás)
* necesitamos:
* 1) arreglo [1,2,5]
* 2) acumulador 0 -> variable
* 3) Devuelve la operación
* Ej:
* 1_ 100 - 1 = 99
* 2_ 99 -2 = 97
* 3_ 97 - 5 = 92
* */

/*
* EJ; Carrito de Compras de un cliente
* */


const respuestaReduce = arreglo
    .every(
        function (valorAcumulado, valorActual, indice, arreglo)
        {
            return valorActual.nota + valorAcumulado
        },
        0//Acumulador
    );

console.log('Esta es una Respuesta Reduce' , respuestaReduce)