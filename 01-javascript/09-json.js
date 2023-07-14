//stringify y Parse
const arreglosUsuarios = [
    {
        id: 1,
        nombre: 'Kevin',
    }
];
const arregloGuardado = JSON.stringify(arreglosUsuarios); //estamos haciendo un string
const usuario = {
    id: 1, 
    nombre: 'Fernando',
};
//OBJETO -> STRING
const objetoGuardado = JSON.stringify(usuario); //Arreglos, Objetos
console.log('objetoGuardado', objetoGuardado);
console.log('arregloGuardado', arregloGuardado);

// STRING -> OBJETO
const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(objetoGuardado);
console.log('arregloRestaurado', arregloRestaurado);
console.log('objetoRestaurado', objetoRestaurado);