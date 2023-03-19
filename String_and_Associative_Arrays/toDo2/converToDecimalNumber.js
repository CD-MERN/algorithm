/*
Titular del 16 de septiembre de 2014: "Se ha encontrado una computadora antigua en un naufragio romano". 
Compuesto por 30 engranajes de bronce, su marco de madera presenta 2000 caracteres. 
Dada una cadena que contiene una representación en números romanos de un entero positivo, devuelve el entero. 
Recuerda que III es 3, DCIX es 609 y MXDII es 1492.
*/

const convertToDecimalNumber = (roman) => {
    let decimalNumber = 0;
    let symbols = roman.split('');

    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for (let i = 0; i < symbols.length; i++) {
        const current = symbols[i];
        const next = symbols[i + 1];

        if (table[current] < table[next]) {
            const temp = table[next] - table[current];
            decimalNumber += temp;
            i++
        } else {
            decimalNumber += table[current];
        }
    }


    return decimalNumber;
}

console.log(convertToDecimalNumber('III'));
console.log(convertToDecimalNumber('IV'));
console.log(convertToDecimalNumber('DCIX'));
console.log(convertToDecimalNumber('MXDII'));