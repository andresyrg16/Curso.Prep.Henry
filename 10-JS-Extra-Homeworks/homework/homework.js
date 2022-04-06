// No cambies los nombres de las funciones.
function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arr = [] 
   
  for (const clave in objeto) {
    arr.push([clave, objeto[clave]])

  }
    return arr ;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    var resultado = {};
    for (const clave in string) {
      let propiedad = string[clave];
      resultado[propiedad] = ( resultado[propiedad] || 0 ) + 1; 
    } 
  return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //[s,o,y,H,E,N,R,Y]
  //Escribe tu código aquí
  let mayuscula = "";
  let minisculas = "";
  for (let i = 0; i < s.length; i++) {
   if ( s.charAt(i) === s.charAt(i).toUpperCase() ) {
     mayuscula = mayuscula + s.charAt(i);
   } else{
    minisculas = minisculas + s.charAt(i);
   }
  }

  return mayuscula + minisculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí 
  let cambio = str.split(" ");
  let aux = [];
  
  for (let i = 0; i < cambio.length; i++) {
    str = cambio[i];
    aux.push(stringInvertida(cambio[i]));
  }
  
  return aux.join(" ")
}

function stringInvertida(str) {
  let invertida = "";
  for (let i = str.length -1; i >= 0; i--) {
   invertida = invertida + str.charAt(i)
 }
 return invertida;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numero_str = numero.toString();
  let cambio = numero_str.split("").reverse().join("");

  if (numero_str === cambio) {
    return "Es capicua";
  }
  else{ 
    return "No es capicua";
  } 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  /** eliminar "a", "b" y "c";
   *  
   */
   let nuevoStr = "";
  let diferentes = "";
  for (let i = 0; i < cadena.length; i++) {
     if(cadena.charAt(i) === "a" || cadena.charAt(i) === "b" || cadena.charAt(i) === "c"){
      nuevoStr = nuevoStr + cadena.charAt(i)
     }
    else {
        diferentes = diferentes + cadena.charAt(i)
    }
  }
  return diferentes;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let longitudes = [];
    
  for (let i = 0; i < arr.length; i++) {
    longitudes.push([arr[i] ,arr[i].length])
    longitudes.sort(compare)
 }

  let nuevoOrden = [];
  for (let i = 0 ; i < longitudes.length; i++) {
    let tamaño = longitudes[i].slice(0, 1)
      nuevoOrden.push(tamaño)
  }
  let longitudeaN = [];
  for (let i = 0; i < nuevoOrden.length; i++) {
      let aux = nuevoOrden[i][0]
      longitudeaN.push(aux);
  }
  // for (let i = 0; i < longitudes.length; i++) {
  //   longitudes[i] = longitudes[i][0];
  // }

  return longitudeaN ;

  function compare(a, b) {
  return a[1] - b[1]
  }
}  

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const filteredArray = arreglo1.filter(value => arreglo2.includes(value));
  return filteredArray;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

