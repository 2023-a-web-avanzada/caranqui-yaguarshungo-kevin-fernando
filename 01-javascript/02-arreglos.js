//arreglos JS
let arreglo = [6,7,8,9,10]
arreglo = true
arreglo = 1
arreglo = undefined
arreglo = [true, 1, 2, "Kevin"]

arreglo = [6,7,8,9,10]
//INTERACIONES
//1.- for of
for(let numero of arreglo){
    console.log('numero', numero)
}
//2.- for in
for(let indice in arreglo){
    console.log('indece', indice)
}

//argregar al arreglo
//anadir al inificio
arreglo.push(1)
//eliminar al final
arreglo.pop()
//arreglar al principio
arreglo.shift(4)
/*splice(indice donde empezar, numero de elementos eliminados, items agregar)
Ejemplo
arreglos.splice(
    indice, -Requerido
    eliminar, - Requerido (si no quiero borrar pongo cero)
    agregar , - Opcional
*/
arreglo.splice(0,0,1,2,3,5)
console.log(arreglo)
const indiceNueve = arreglo.indexOf(9)
console.log(indiceNueve)