/*
Dada una matriz y un valor adicional, inserta este valor al principio de la matriz.
Haz esto sin utilizar ningún método de matriz incorporado. 
*/

let arr = [1, 2, 3, 4, 5, 6, 10]

const newValue = 3;

const pushToFrom = (array, value) => {
    return [value, ...array]
}


console.log(pushToFrom(arr, newValue));