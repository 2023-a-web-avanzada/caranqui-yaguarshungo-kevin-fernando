//=======FUNCIONES========
function soloNumeros(a, b, c){
    return a - b +c;
}
function soloLetras(a, b, c){ //sinm return, es decir, no devuelve nada
    console.log(a,b,c)
}

function funcionConNombre(){
}

//funciones Anónimas
const funcionSinNombre = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};

[].forEach(func)

///FAT  ARROW > Anonymous
const functionFatArrow1 = () => {};
let functionFatArrow2 = () => {};
var functionFatArrow3 = () => {};

const functionFactArraw5 = (parametro) =>{
    return parametro +1;
}
const functionfactArrow6 = (parametro) => parametro +1; //Una sola linea, omitió return, omiiton llaves
const funcionFatArrow7 = parametro => parametro +1; //solo tenemos un parametro y omitimos el parentesis

//parametros infinitos
function sumarNumeros( ...todosLosNumeros){
    let total = 0;
    todosLosNumeros.forEach(
        (valorActual)=>{
            total =  total + valorActual;
        }
    );
    return total;
    //return todosNumeros.reduce((a,v) => a +v, 0);
}

//funciones asincronas
