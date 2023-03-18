/*
Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras, en mayúscula).
Dado "no hay almuerzo gratis. 
Debes pagar por tu comida", devuelve "NHAG-DPPTC".
Dado "¡En vivo desde Nueva York, es sábado por la noche!", devuelve "ENDNYESPLN". 
*/
const string_1 = 'no hay almuerzo gratis. Debes pagar por tu comida'
const string_2 = '¡En vivo desde Nueva York, es sábado por la noche!'

const acronym = (string) => {
    const regex = /\W/g
    string = string.split(' ')
    let acronym = '';
    for (let i = 0; i < string.length; i++) {
        let element = string[i];
        if (/\./.exec(element)) {

            acronym += element.replace(regex, '')[0].toUpperCase();
            acronym += '-'
        } else {
            acronym += element.replace(regex, '')[0].toUpperCase();
        }
    }

    return acronym;
}

console.log(acronym(string_1));
console.log(acronym(string_2));