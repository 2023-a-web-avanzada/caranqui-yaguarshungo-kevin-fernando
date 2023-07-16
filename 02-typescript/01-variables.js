var nombre = 'Kevin'; //primitiva
var nombre2 = 'Kevin2'; // es de tipo string de la Clase String 
//Tipo de Datos y Duck-typing
var edad = 32;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.5;
//Duck Typing
var apellido = 'Caranqui'; //string ->
//apellido =1; //Error, no es un  string
apellido = 'Sarzosa';
apellido.toUpperCase();
//se tiene tipo de dato any, este se utiliuza en js siempre, todo es cualquier cosa. Ignora el ducktyping. 
//lo más común es no usar el tipo any. 
var marihuana = 2;
marihuana = '2';
marihuana = function () { return '2'; };
//Podemos hacer que una variable sea mas de dos tipos a la vez
var edad_multiple = '2'; //2 new Date();
edad_multiple = 2;
edad_multiple = "2";
edad_multiple = "dos";
edad_multiple = new Date();
edad_multiple = 2022;
var numeroUnico = 1; //para igualar a otros se castea
numeroUnico = numeroUnico + Math.pow(edad_multiple, 2); //se castea usando (  ... as tipo)
//se tiene las interfaces en type script. estas son para implementarlas en las clases
