// ------- > Arrays
//1. 
const arrayVacio = [];

//2.
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

//3.
const arrayNumerosPares = [0,2,4,6,8];

//4.
const arrayBidimensional = [[0,1,2], ['a','b','c']];

//------> Funciones
//5.
function suma (a,b ){
    return a + b ; 
}
//6.
function potenciacion (num1, num2){
    return (num1 ** num2 );
}  

//7.
function separarPalabras (palabra){
return palabra.split(' ');
}
console.log(separarPalabras('hola mundo'));

//8.
function repetirString (texto , num){
return texto.repeat(num);
}
console.log(repetirString('hola mundo ', 3));

//9.
function esPrimo (num){
    if (num > 1){
return false; 
    }

}


