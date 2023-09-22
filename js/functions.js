//funciones
//Hard codeado -> código duro
//Realizar programación dinámica
//-> Hoisting

// let a = +prompt("el primer valor");
// let b = +prompt("el primer valor");

// -> Todas las restas son sumas de valores negativos

// const res = suma(a, b);

//n

// console.log(res);

//el nombre de la función sirve para invocarla
//tokyo night
// function suma(a, b) {
//   const resultado = a + b;
//   return resultado;
// }

alert("Bienvenido a nuestra calculadora. Somos la comisión 67i");

let salir = false;

while (!salir) {
  let respuesta_usuario = prompt(`Ingrese la operación que desea realizar. \n 
    1 - Suma. \n
    2 - Resta. \n
    3 - Imprimir Multiplos \n
    4 - División \n
    5 - Salir`);
  //El indice de un array inicia en la posición 0
  //y finaliza en la longitud del arraY (cant elementos) - 1
  switch (respuesta_usuario) {
    case "1":
      const r = Question();
      alert(`El resultado de la suma es ${r[0] + r[1]}`);
      break;
    case "2":
      const rr = Question();
      alert(`El resultado de la resta es ${rr[0] - rr[1]}`);
      break;
    case "3":
      const rp = Question();
      for (let index = 0; index < rp[0]; index++) {
        console.log(rp[1] * index);
      }
      break;
    case "4":
      const rm = Question();
      alert(`El resultado de la resta es ${rm[0] - rm[1]}`);
      break;
    case "5":
      const rd = Question();
      alert(`El resultado de la resta es ${rd[0] - rd[1]}`);
      break;
    case "6":
      const rpot = Question();
      alert(`El resultado de la resta es ${Math.pow(rpot[0], rpot[1])}`);
      break;

    default:
      salir = true;
      break;
  }
  if (salir === false) {
    let respuesta_escape = prompt("¿Desea realizar otra operación? y/n.");

    if (respuesta_escape.toUpperCase() === "N") {
      salir = true;
    }
  }
}

//Asilar lógica
function Question() {
  let a = +prompt("Ingrese el primer valor.");
  let b = +prompt("Ingrese el segundo valor.");
  return [a, b];
}

function Suma(a, b) {
  return a + b;
}
