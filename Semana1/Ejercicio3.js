// Calcular la comisión sobre las ventas totales de un empleado,
// sabiendo que el empleado no recibe comisión si su venta es hasta S/.150,
// si la venta es superior a S/.150 y menor o igual a S/.400 el empleado
// recibe una comisión del 10% de las ventas y si las ventas son mayores a 400,
//  entonces la comisión es de S/.50 más el 9% de las ventas.

// Creamos la funcionalidad
const calcularVentas = (cantVentas) => {
    if (cantVentas > 400){
        Venta = cantVentas * 0.09;
        VentaTotal = 50 + Venta + cantVentas;

    } else if (cantVentas > 150){
        Venta = cantVentas * 0.10;
        VentaTotal = Venta + cantVentas;
    }

    return VentaTotal;
};

// Creamos la ventana para ingresar la cantidad de ventas
let Ventas = +prompt("Ingrese la cantidad de sus Ventas:");

// Imprimimos en la consola.
console.log(calcularVentas(Ventas));