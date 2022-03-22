// const desplazarIzquierda = (j, arreglo) => {
//     let tempArr = [];
//     for (let i = 0; i < arreglo.length; i++) {
//         if (i + j < arreglo.length) {
//             tempArr.push(arreglo[i + j]);
//         } else {
//             console.log(i - (arreglo.length - j));
//             tempArr.push(arreglo[i - (arreglo.length - j)]);
//         }
//     }
//     return tempArr;
// };

// console.log(desplazarIzquierda(2, [1, 2, 3, 4, 5]));

const j = [1, 2, 3, 4, 5];
j.shift();

console.log(j);