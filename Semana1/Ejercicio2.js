// Mostrar los 50 primeros números múltiplos de 7,
//  pero NO múltiplos de 2,3 o 5

// Creamos la funcionalidad
let multiplo_7 = [];
let numero = 1330; 
let dato;

for (dato = 1; dato <= numero; dato++) {
  if(dato%7 === 0 && dato%2 !== 0 && dato%3 !== 0 && dato%5 !== 0 ){
    multiplo_7.push(dato);
  }
};
// Imprimimos en la consola
console.log(multiplo_7);
