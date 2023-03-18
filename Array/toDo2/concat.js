/*
Concat

Replica el concat() de JavaScript. Crea una función independiente que acepte dos matrices. 
Devuelve una nueva matriz que contenga los elementos de la primera matriz, seguida de los elementos de la segunda matriz. 
No alteres las matrices originales.
Ej .: arrConcat(['a', 'b'], [1,2]) debería devolver una nueva matriz ['a', 'b', 1,2]. 
*/

const mat = ['a', 'b'];
const mat2 = [1, 2];


const concat = (leftArray, rightArray) => {
    return [...leftArray, ...rightArray]
}

console.log(concat(mat, mat2));