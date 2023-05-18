//Variables mutables (re asginadas)
var numeroUno= 1;
let numeroDos =2;
//esto quiere decir que su valor puede ser modification
numeroUno = 12;
numeroDos = 21;

numeroUno = false;
numeroDos = true;
//VARIABLES INMUTABLES
//no se pueden reasignar de nuevo
const configuracionArchivos = "PDF";
//configuracionArchivos = "XML";
//
// variables que vamos a usar
// const > let > var (no usar)
//TIPOS DE VARIABLES
// Primitivas
const numero = 2; //number
const sueldo = 1.2; //float
const texto = 'Kevin'; //string
const apellido = "Caranqui";
const casado= false; // booelan
const hijos = null; //object
const zapatos = undefined // indefinida
console.log(typeof  sueldo);
console.log(typeof  texto);
console.log(typeof  apellido);
console.log(typeof  casado);
console.log(typeof  hijos);
console.log(typeof  zapatos);


//truty y Falsy
if(true){
    console.log('Es verdadero')
} else {
    console.log("Es Falso")
}
//Compodemos condicionar no solo booleanos
//String
console.log("String")
if(""){
    console.log('Es verdadero')
} else {
    console.log("Es Falso") //Falsy
}

if("Kevin"){
    console.log('Es verdadero') //Truty
} else {
    console.log("Es Falso")
}
console.log("Numeros")
//numeros
if(-1){
    console.log('Es verdadero')
} else {
    console.log("Es Falso") //Falsy
}

if(0){
    console.log('Es verdadero') //Truty
} else {
    console.log("Es Falso")
}

if(1){
    console.log('Es verdadero') //Truty
} else {
    console.log("Es Falso")
}

console.log("Objetos")
if(null){
    console.log('Es verdadero') //Truty
} else {
    console.log("Es Falso")
}

if(undefined){
    console.log('Es verdadero') //Truty
} else {
    console.log("Es Falso")
}

//==========================================
//JSON - objetos
//==========================================
const kevin = {
    "nombre": "kevin",
    'apellido': 'Caranqui',
    edad: 23,
    casado : null,
    zapatos : undefined,
    ropa : {
        color: 'plomo',
        talla: 38,
    },
    mascotas: ['Vaca', 'Michi']
};
console.log(kevin)

//Acceder a las propiedades
kevin.nombre
kevin.apellido
//tambien se puede captura
kevin["nombre"]
//modificar valores
kevin.edad = 23
kevin["nombre"] = 'Fernando'

//creando atributos
kevin.sueldo;
console.log(kevin.sueldo);
kevin.sueldo = 1.2;
console.log(kevin.sueldo);
