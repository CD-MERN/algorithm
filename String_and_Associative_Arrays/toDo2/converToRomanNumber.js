/*

Entero a números romanos
Dado un entero positivo menor que 4000, devuelve una cadena que contenga ese valor en representación de números romanos. 
En esta representación, I es 1, V es 5, X es 10, L = 50, C = 100, D = 500 y M = 1000. 
Recuerda que 4 es IV, 349 es CCCIL y 444 es CDXLIV.

*/

const converToRomanNumber = (number) => {
    let romanNumber = ''
    if (number >= 4000) {
        return 'IV, el número es mayor a 4000'
    }

    romanMap = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    }

    Object.keys(romanMap).reverse().forEach((key) => {
        while (key <= number) {
            romanNumber += romanMap[key];
            number -= key;
        }

    });

    return romanNumber
}

console.log(converToRomanNumber(4));
console.log(converToRomanNumber(349));
console.log(converToRomanNumber(444));