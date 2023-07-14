//07-promesas
const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimeraPromesa = new Promise(
        (resolve, reject) =>{ //f -> promesa
            if(numero %2 === 0){
                resolve(numero); //return(then)
            } else {
                reject(':( no es par');
            }
        }
    );
    return miPrimeraPromesa;
}

function promesaElevarAlCuadrado(numero){
    return new Promise((res) =>res(Math.pow(numero, 2)));
}
promesaEsPar(4)
    .then( //try  // devolcer otra promesa
        (data) => {
            console.log('DATA', data); //4
            return promesaElevarAlCuadrado(data);
        }
    )
    .then( //try //16)
        data =>{
            console.log('DATA', data) //16
            return promesaElevarAlCuadrado(data);
        }
    )
    .then(
        data =>{
            console.log('DATA', data) //256
        }
    )
    .catch( //catch
        (error) => {
            console.error('Error', error); //string ...
        }
    )
    .finally(
        () =>{
            console.log('Finally')
        }
    );

