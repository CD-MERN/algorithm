/*
Implementa reverseString(str) que, dada una cadena, devuelve esa cadena con los caracteres invertidos.

Dado "criatura", devuelve "arutairc". Por tentador que parezca, ¡no uses reverse() que está incorporado!
*/

const string = 'criatura'

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString(string));