//Arrays -> Matrices -> Matrices Unidimensionales -> Vectores Unidimensionales -> Complejos
const saludo = "hola";

// -> Longitud : Length -> Cant Elementos
// -> Indice o Index => El índice más alto del array es  => n - 1
//    siendo n la longitud del array
let listaDeNombres = [
  "geronimo",
  "matias",
  "josé",
  "geronimo",
  "diego",
  "esteban",
  "juanita",
  "josefina",
];

//Manipulación de arrays
//Agregar: Escribo - Modificar:Escribo - Eliminar:Escribo - Leer: Leo
//ABM -> Alta (Agregar o Add), Baja (Eliminar o Delete), Modificación (Update, Modificar)
//R -> Lectura
// Id

let arrayIndex = listaDeNombres.length - 1;
//0          1          2
//Para obtener el último indice de un array usamos la fórmula array.length - 1

//Para leer un elemento de un array necesitamos indicar cuál es el indice al que queremos
//acceder
//Para modificar un elemento necesitamos tener también si indice
//pero a diferencia de la lectura yo puedo reasignar esa posición del array
//Utilizando la propiedad .length del array podemos agregar elementos al mismo

//eliminar un dato
//listaDeNombres[arrayIndex] = null;

//Agregar un elemento más

//Los strigns son arrays de chars

//Imprimir en consola sólamente los nombres cuya letra comience con j
//Si un string es = a un array, yo puedo acceder a sus caracteres utilizando su indice
for (let index = 0; index < listaDeNombres.length; index++) {
  const elemento = listaDeNombres[index];
  if (elemento[0] === "g") {
    console.log(elemento);
  }
}

// for (let jdex = 0; jdex < listaDeNombres[index].length; jdex++) {
//     if (listaDeNombres[index][jdex] === "o") {
//       console.log(listaDeNombres[index]);
//     }
//   }
///longitud - 1
const arrayNumeros = [10, 1, 3, 15, 118, 20, 30, 44, 35, 9, 8]; //index = 10

for (let index = 0; index < arrayNumeros.length; index++) {
  const numero = arrayNumeros[index];

  if (arrayNumeros[index] % 2 === 0) {
    console.log(numero);
  }
}

//const enOtrosLenguajesSonDeUnSoloTipoDeDato = ["hola", 10, true];

// let continua = true;
// let arrayUsuario = [];

// while (continua) {
//   let numero = +prompt("Ingrese un número");
//   arrayUsuario[arrayUsuario.length] = numero;

//   let respuesta = prompt("Desea continua? 1: Si, 2: No");

//   if (respuesta === "2" || respuesta === null) {
//     if (arrayUsuario.length < 5) {
//       alert("Es necesario ingresar por lo menos 5 peces");
//     } else {
//       continua = false;
//     }
//   }
// }

// alert("Los valores ingresador por el usuario son:" + arrayUsuario);

const s = 7;
const t = 10;
const a = 4;
const b = 12;
const apples = [2, 3, -4, 5, 5];
const oranges = [3, -2, -4, 5, 5];
let appleCount = 0;
let orangeCount = 0;

for (let index = 0; index < apples.length; index++) {
  const apple = apples[index];
  const resultado = apple + a;
  if (resultado >= s && resultado <= t) {
    appleCount++;
  }
}

for (let index = 0; index < oranges.length; index++) {
  const orange = oranges[index];
  const resultado = orange + b;
  if (resultado >= s && resultado <= t) {
    orangeCount++;
  }
}

console.log(appleCount);
console.log(orangeCount);
