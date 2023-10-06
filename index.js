//Arrays
let arrayVacio=[];
let arrayNumeros=[0,1,2,3,4,5,6,7,8,9];
let arrayNumerosPares=[0,2,4,6,8];
let arrayBidimensional=[[0,1,2],['a','b','c']];

//Funciones

function suma(num1,num2){
    return num1+num2
}

function potenciacion(a,b){
    return a^b
}


function separarPalabras(string){

let array = string.split(" ")

return array
}
console.log(separarPalabras("hola mundo"))

function repetirString(string,numero){
    let arrayrep=string.concat(numero)
return arrayrep
}
console.log(repetirString('hola',2))


function pintarArray(arraypint){ 
   
    return arraypint.toString()
}

console.log( pintarArray([1,2,3]))


//iteraciones proyecto


let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

let holaMundo = ['Hola','Mundo'];

let loGuardoTodo = ['hola','que',23,42.33,'tal']

let arrayDeArrays = [[756,'nombre'],[225,'apellido'],[298,'direccion']]

function multiplicacion(a,b){
    return a*b
}

function division(a,b){
    return a/b
}

function esPar(a){

    
    return (a%2===0)
}


function suma(num1,num2){
    return num1+num2
}
function resta(num1,num2){
    return num1+num2
}

function multiplicacion(num1,num2){
    return num1+num2
}


function arrayFunciones(num1,num2){

    return [suma(num1,num2),resta(num1,num2),multiplicacion(num1,num2)]
}



