/*
Quitar cadenas más cortas

Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.

*/

array = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectet"];

const removeString = (array, length) => {
    return array.filter(word => word.length > length)
}

console.log(removeString(array, 4));