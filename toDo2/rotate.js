/* 
Implementa rotateArr(arr, shiftBy) que acepte matriz y desplazamiento. 
Desplaza los valores de arr hacia la derecha en esa cantidad. 
"Envuelve" cualquier valor que cambie el final de la matriz hacia el otro lado, 
de modo que no se pierda ningún dato. 
Opera en el lugar: dado ([1,2,3], 1), cambia la matriz a [3,1,2]. 
No uses funciones integradas.
Segundo: permitir shiftBy negativo (shift L, no R).
Tercero: minimiza el uso de memoria. Sin un arreglo nuevo, 
maneja arreglos/shiftBys en millones.
Cuarto: minimiza los toques de cada elemento
*/

const mat = [4, 2, 1, 3, 5];


const rotateArr = (array, shiftBy) => {
    for (let i = 0; i < Math.abs(shiftBy); i++) {
        if (shiftBy >= 0) {
            array.unshift(array.pop());
        } else {
            array.push(array.shift());
        }
    }
    return array;
}

console.log(rotateArr(mat, 3));