// Bucle es una estructura de control de datos que se repite mientras la condicion se cumpla

// While

 let contador = 11;


while(contador<=10){

  console.log(`while ${contador}`)
  contador++;
} 

// Generar un script que me imprima en consola los numeros del 1 al 200 y que me diga cuales son los pares


// DO WHILE

let contador2 =1;


do{

  if(contador2%2===0){
    console.log(`El numero ${contador2} es par`)
  }else{
    console.log(`El numero ${contador2}`)
  }

  contador2++;
 

}while(contador2<=200); 



// FOR


// Generar un script que me agregue canciones a una lista, que el usuario elija cuantas canciones agregar y que canciones agregar

let cantCanciones = +prompt("Ingrese cuantas canciones desea agregar");

for (let c = 1; c <= cantCanciones; c++) {

  let opcion = +prompt(`Elige el numero de la cancion para agregar
  1 - Enanitos verdes - Mariposas
  2 - Fito Paez - A rodar
  3 - Los caballeros de la quema - Fulanos de nadie
  4 - Mana - Si no te hubieras ido
  5 - Indio solari - ji ji ji
  `);


  switch (opcion) {
    case 1:
      console.log("1 - Enanitos verdes - Mariposas");
      break;
    case 2:
      console.log("2 - Fito Paez - A rodar");
      break;
    case 3:
      console.log("3 - Los caballeros de la quema - Fulanos de nadie");
      break;
    case 4:
      console.log("4 - Mana - Si no te hubieras ido");
      break;
    case 5:
      console.log("5 - Indio solari - ji ji ji");
      break;
    default:
      console.log("No sea pendejo");
      break;
  }
}
