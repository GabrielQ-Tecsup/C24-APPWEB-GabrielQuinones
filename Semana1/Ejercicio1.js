// Desarrolle una función que permita determinar cuál de tres
// parámetros que se le proporcione a la función es mayor.

// añadimos los valores
let param1, param2, param3, i, mayor;

// Agregamos los campos de lectura para los datos
param1 = +prompt("Ingrese el primer numero")
param2 = +prompt("Ingrese el segundo numero")
param3 = +prompt("Ingrese el tercer numero")

// creamos la funcion 
if (param1 > param2) {
    i = param1;
}else{
    i = param2;
};
if (i > param3) {
    mayor = i
}else{
    mayor = param3
};

// Lo imprimimos en la consola.
console.log("El Numero Mayor es" , mayor);
    