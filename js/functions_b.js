//Ejercicio 1 -> Obtener pares o impares sin utilizar el mod

//sin utilizar funciones del lenguaje

//if, else, if else, switch, funciones, objetos, DOM, BOM, localStorage
//Lógica de programación
//Invocar Función -> Usar su nombre y pasar los parámetros necesarios para que la función
//Se ejecute correctamente
// if()else if else
// switch
// for
// while
// do while

// SolicitarValores();
// saludoInicial("geronimo");

// function SolicitarValores() {
//   let resultado = 0;
//   for (let index = 0; index < 5; index++) {
//     //index = 0
//     //usuario ingresó 10
//     let valor = +prompt("Ingres el número");
//     //resultado = suma(0, 10);
//     resultado = suma(resultado, valor);
//   }
//   console.log(resultado);
// }

// function suma(a, b) {
//   let resultado = a + b;
//   return resultado;
// }

// //MI SISTEMA ME PIDE SABER SI LE PUEDO VENDER ALCOHOL"

// if (VerificarSiEsMayorDeEdad(18) === true) {
//   console.log("Se puede vender bebidas");
// }

// //VERIFICAR SI PUEDE INGRESAR A UN BOLICHE
// if (VerificarSiEsMayorDeEdad(15)) {
//   console.log();
// } else {
//   console.log("NO puede ingresar");
// }

// //Verificar si puede votar
// if (VerificarSiEsMayorDeEdad(22)) {
//   console.log("SI PUEDE VOTAR");
// }

// function VerificarSiEsMayorDeEdad(edad) {
//   if (edad >= 18) {
//     return true;
//   } else {
//     false;
//   }
// }

// function saludoInicial(nombre) {
//   console.log(`Hola! ${nombre}, cómo estás?`);
// }

//Carrito de compras
//Nombre del producto -> Pares (0)
//Precio del producto -> Impares
//infinito -> bucle
//while sólamente deja de ejecutarse si no se cumple la condición

//#region  IMPORTANTE!!!
//OJO con la condición de las lineas 82 a  83,
//cuando el array tenga un valor va a almacenar un nombre

let cont = true;
let shoppingCart = []; //-> length 1
console.log("Hola mundo");
while (cont) {
  let productName = prompt("Ingrese el nombre del producto");
  let productPrice = prompt("Ingrese el precio");
  let index = 0;

  //acá estamos evitando restarle 1 a 0
  //length = 0 - 1 = array[-1]
  if (shoppingCart.length > 0) {
    index = shoppingCart.length - 1;
  }

  //
  if (index === 0 || index % 2 === 0) {
    shoppingCart[index] = productName;
  } else {
    shoppingCart[index] = productPrice;
  }

  let response = prompt("¿Desea continuar? Y/N");

  if (response.toUpperCase() !== "Y") {
    cont = false;
  }
}
//#endregion
//array -> length = cant de elementos
// index = length - 1
//evaluar si el carrito esta vacío y
//si está vacío simplemente colocarle
//0 a index

function addProduct(name, price) {}

alert(shoppingCart);
