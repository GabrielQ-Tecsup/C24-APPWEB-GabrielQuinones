// Mostrar los 50 primeros números múltiplos de 7,
//  pero NO múltiplos de 2,3 o 5

// Creamos una funcion para calcular si el numero es multiplo
function multiple(valor, multiple) {
        resultado = valor % multiple;
        if(resultado==0)
            return true;
        else
            return false;
};

// Primero creamos un array donde los valores se puedan almacenar.
let multiplo_7=[];

// Creamos un bucle del 1 al 343 (ya que 7 x 49 es igual a 343)
// y como el problema nos dice "los 50 primeros numeros" 7 x 0 tambien cuenta
for(let i=0; i<=343; i++) {
    // indicamos el numero dentro del if, en este caso es 7
    if(multiple(i,7))
        multiplo_7.push(i);
};

 // Imprimimos en la consola
console.log("Los 50 primeros numeros multiplos de 7 son: ",multiplo_7);
