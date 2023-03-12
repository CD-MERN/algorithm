/*
Dada una matriz, elimina y devuelve el valor al principio de la matriz. 
Haz esto sin utilizar ningún método de matriz incorporado, excepto pop(). 
*/

let arr = [1, 2, 3, 4, 5, 6, 10]



const popToFrom = (array) => {
    const pop = array.pop();
    return [pop, ...array]
}


console.log(popToFrom(arr));