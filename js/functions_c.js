function SolicitarNumeros() {
  let a = +prompt("Ingrese su primer valor");
  let b = +prompt("Ingrese su segundo valor");
  return [a, b];
}

function Suma() {
  let res = SolicitarNumeros();
  Validate(res[0], res[1]);
  return res[0] + res[1];
}

function Substraer() {
  let res = SolicitarNumeros();
  Validate(res[0], res[1]);
  return res[0] - res[1];
}

function Mult() {
  let res = SolicitarNumeros();
  Validate(res[0], res[1]);
  return res[0] * res[1];
}

function Div() {
  let res = SolicitarNumeros();
  Validate(res[0], res[1]);
  return res[0] / res[1];
}

function Resto() {
  let res = SolicitarNumeros();
  Validate(res[0], res[1]);
  return res[0] % res[1];
}

function Validate(paramA, paramB) {
  if (isNaN(paramA) || isNaN(paramB)) {
    throw new Error("Debe ingresar números");
  }
}

//Solicitar al usuario ingresar por
//pantalla una lista de calificaciones de sus alumnos,
//luego devolver el promedio de dichas calificaciones.

// let continuar = true;
// let array  = [];
// let resultado =  0;

// while(continuar){
//     let resultado = +prompt("Ingrese la nota de su alumno");
//     array[array.length] = resultado;

//     continuar = confirm("Desea continuar?");
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     resultado += element;
// }


// console.log(resultado / array.length);

function FuncionCreadaParaProbarWorkerService(){
  return "Hola mundo";
}