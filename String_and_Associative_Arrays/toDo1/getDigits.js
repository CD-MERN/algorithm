/*
Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los dígitos de la cadena. 
Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 1357924680
*/

let string = '"0s1a3y5w7h9a2t4? 6! 8? 0"'

const getDigits = (string) => {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        const ascii = string.charCodeAt(i);
        if (ascii >= 48 && ascii <= 57) {
            newString += string[i];
        }
    }
    return newString;
}

console.log(getDigits(string));