//Operadores lógicos
//Operan sobre booleanos
//True o False -> Tradicionales
//True o False o TrueFalse
//Tablas de la verdad
// AND => &&   OR => ||  ! => NOT

// const llovio = false;
// const cayeron_piedras = false;
// const resultado = llovio && cayeron_piedras;

// console.log("El resultado de AND es: " + resultado);

// const voy_yo = false;
// const va_mi_hermano = false;
// const resultado_b = voy_yo || va_mi_hermano;

// console.log("El resultado de OR es: " + resultado_b);

// const quiero_ir_a_dormir = false;
// console.log("Invertir booleano: " + !quiero_ir_a_dormir);

//Paradigma de Programación Funcional
//Programació condicional o estructuras de control

//Condiciones -> booleanos
//IF - ELSE - ELSE IF
//

//pregunta => false === true -> false
// if (false) {
//   console.log("Estoy dentro del if");
// } else {
//   console.log("Estoy dentro del else");
// }

// const piso_imp = 550000;
// let sueldo_empleado_a = 32000;
// let excento_empleado_a = false;

// let sueldo_empleado_b = 150000;
// let excento_empleado_b = false;

// let sueldo_empleado_c = 780000;
// let excento_empleado_c = true;

// const result = sueldo_empleado_a > piso_imp;
// console.log("El valor de result es: " + result);

// const resultado_excento = excento_empleado_a === false;
// console.log("El valor de resultado_excento: " + resultado_excento);
//1    Y   1    = 1
// const resultado_final =
//   sueldo_empleado_a > piso_imp && excento_empleado_a === false;
// console.log(
//   "El resultado de result && resultado_excento es: " + resultado_final
// );

// if (sueldo_empleado_a > piso_imp && excento_empleado_a === false) {
//   console.log("Resultado final es verdadero");
// } else {
//   console.log("Resultado final es falso");
// }

// if (result && excento_empleado_a === false) {
//   console.log("Paga impuestos a las ganancias");
// } else {
//   console.log("NO Paga impuestos a las ganancias");
// }

//Herramientas
// let numeroIngresado = prompt("Ingrese su edad");
// alert(`el numero ingresado fue ${numeroIngresado}`);

// let numeroIngresado = prompt("Ingrese su edad");
//El usuario ingresa un hola

// console.log(`El valor ingresado por el usuario es: ${numeroIngresado}`);

// let numero = parseInt(numeroIngresado);
//numero = NaN
// "hola" + "mundo" => "holamundo"
//`Hola cómo estás ${numero}`

// console.log(`Este es el resultado de convertir el valor ingresado
// en un entero ${numero}`);

// let resultado = isNaN(numero);
//verdadero -> si el valor ingresado entre paréntesis es un NaN
//caso contrario va a ser falso
// console.log(`Este es el valor actual de resultado: ${resultado}`);
//Debuggear
//Camino 1
// if (resultado === true) {
//Por favor ingrese un número
//se ejecuta el código dentro de este if
//   console.log(
//     `Ingresó al if porque el valor actual de resultado es ${resultado}`
//   );
// } else {
//    if(numero >= 18){
//     alert("El usuario es mayor de edad, tiene venta de alcohol y cigarros permitida");
//    }else{
//     alert("El usuario NO es mayor de 18 años por ende se bloquea la sección de bebidas y cigarrillos");
//    }
// }

// if(resultado === false){
//   if(numero >= 18){
//     alert("El usuario es mayor de edad, tiene venta de alcohol y cigarros permitida");
//    }else{
//     alert("El usuario NO es mayor de 18 años por ende se bloquea la sección de bebidas y cigarrillos");
//    }
// }

//Débilmente Tipado -> string, number, boolean

//-> 1011

//C# -> Programación Orientada a Objetos -> POO
//Javascript -> Paradigma Funcional y a programación orientada a eventos

//C#, Java -> Fuertemente Tipados
//Int16, Int32, Int64, long, short, decimal, float, boolean, bit, string, char
//10 + "11" -> ERROR NO SE PUEDE SUMAR UN STRING Y UN NUMERO

//Si numero es mayor a 18 hace esto
// if(numero > 18){
//   alert("Se puede vender bebidas y cigarrillos");
// }
//Si número NO es mayor a 18 pero es IGUAL a 18 hace esto
// else if(numero === 18){
//   alert("Se puede vender sólo bebidas");
// }
//Si no pasó ninguno de los casos anteriores hace esto
// else{
//   alert("No se puede bender ni alcohol ni cigarrillos");
// }

//Estructuras de control condicionales
//if - else - else if

//Estructura de control por valores SWTICH
//Necesitamos solicitarle al usuario cuál va a ser la operación que desea realizar

const operacion = prompt(
  "Ingrese la operación que desea realizar. 1 - Suma, 2 - Resta"
);
// -> Cancelar -> Operacion = null

const primer_mensaje = "Ingrese A";
const segundo_mensaje = "Ingrese B";
const mensaje_resultado = "Alguno de los valores ingresados NO son números";
//expresión -> true AND false => Expresión booleana

switch (operacion) {
  //if
  case "1":
    //Acá deberíamos solicitar al usuario los 2 números y operar con ellos
    let a = prompt(primer_mensaje); //string
    let b = prompt(segundo_mensaje); //string
    let resultado = +a + +b;

    if (!isNaN(resultado)) {
      alert(mensaje_resultado);
    } else {
      alert(resultado);
    }
    break;

  case "2":
    //Acá deberíamos solicitar al usuario los 2 números y operar con ellos
    let c = prompt(primer_mensaje); //string
    let d = prompt(segundo_mensaje); //string
    let resultado_resta = +c - +d;
    if (isNaN(resultado_resta)) {
      alert(mensaje_resultado);
    } else {
      alert(resultado_resta);
    }
    break;
  case "3":
    //multiplicar
    break;
  //else if
  case "4":
    //dividir
    //La división por 0
    break;
  //else
  default:
    alert("Ingrese los valores indicados previamente. No sea imbecil");
    break;
}



