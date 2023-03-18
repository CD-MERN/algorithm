/*
Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.

Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 29 (no 35). 

*/

string = '"Amor, me estás volviendo loca"'

const countWithoutSpaces = (string) => {
    return string.replace(/\s+/, '').length - 1
}


console.log(countWithoutSpaces(string))