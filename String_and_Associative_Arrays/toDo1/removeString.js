/*
Quitar cadenas más cortas

Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.

*/

string = "Lorem ipsum dolor sit amet, consectet";

const removeString = (string, length) => {
    return string.split(' ').filter(word => word.length > length)
}

console.log(removeString(string, 3));