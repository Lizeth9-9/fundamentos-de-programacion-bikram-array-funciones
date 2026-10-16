// ------- > Arrays
//1.
const arrayVacio = [];

//2.
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3.
const arrayNumerosPares = [0, 2, 4, 6, 8];

//4.
const arrayBidimensional = [
    [0, 1, 2],
    ["a", "b", "c"],
];

//------> Funciones
//5.
function suma(a, b) {
    return a + b;
}
//6.
function potenciacion(num1, num2) {
    return num1 ** num2;
}

//7.
function separarPalabras(palabra) {
    return palabra.split(" ");
}
console.log(separarPalabras("hola mundo"));

//8.
function repetirString(texto, num) {
    return texto.repeat(num);
}
console.log(repetirString("hola mundo ", 3));

//9.
function esPrimo(num) {
    let divisores = 0;
    if (num <= 1) return false;
    for (i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(esPrimo(37));

//10.
function ordenarArray(numeros) {
    return numeros.sort((a, b) => a - b);
}
console.log(ordenarArray([52, 98, 56, 47, 14]));

//11.
function obtenerPares(numeros1) {
    return numeros1.filter((e) => e % 2 === 0);
}
console.log(obtenerPares([52, 98, 56, 47, 14]));

//12.
function pintarArray(array) {
    return "[" + array.join(",") + "]";
}
console.log(pintarArray([0, 1, 2, 3]));

//13.
function arrayMapi(arra, funcion) {
    return arra.map(funcion);
}
console.log(arrayMapi([0, 1, 2, 3], esPrimo));

//14.
function eliminarDuplicados(array1) {
    return array1.filter((e, index) => {
        return array1.indexOf(e) === index;
    });
}
console.log(eliminarDuplicados([1, 2, 2, 5, 5, 5, 2, 3, 4, 4, 1]));

//15.
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16.
let holaMundo = ["hola", "mundo"];

//17.
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//18.
let arrayDeArrays = [
    [756, "nombre"],
    [225, "apellido"],
    [298, "direccion"],
];

//19.
function multiplicacion(a, b) {
    return a * b;
}
console.log(multiplicacion(2, 2));

//20.
function division(a, b) {
    return a / b;
}
console.log(division(2, 2));

//21.
function esPar(a) {
    if (a % 2 === 0) {
        return true;
    } else if (a % 2 !== 0) {
        return false;
    }
}
console.log(esPar(2));

//22.
const arrayFunciones = [
    function suma(a, b) {
        return a + b;
    },
    function resta(a, b) {
        return a - b;
    },
    function multiplicacion(a, b) {
        return a * b;
    },
];
