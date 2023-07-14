//05-Desctructuración
const kevin = {
    nombre: "Kevin",
};
const Carlonia = {
    nombre: "Carolina",
    apellido: "Eguez",
};
const kevinCaralina = { // crea una nueva referencia (valor)
    ...Carlonia,//1. El orden es importante para propiedades que se repite
    ...kevin //el último reemplaza a los anteriores
};
console.log('kevinCarolina', kevinCaralina);
//Destructuración de Arreglos
const arreglo1 = [1, 2, 3, 4, 5];
const arrgelo2 = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arreglo1, //Importa el orden
    ...arrgelo2
]; //Resuultado [1, 2,3 ,4 ,5, 6, 7, 8, 9, 10]
console.log('superarreglo', superArreglo)