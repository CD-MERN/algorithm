/*

Escribe una función individual para quitar cadenas de la misma longitud de una matriz dada. La matriz contiene:
["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], 
cambia esta misma matriz a  ["Nope!","Its","Chris","."].

*/

const array = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."]

const removeStringWithSameLength = (array) => {
    let arrayLength = {}
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element, element.length);
        if (arrayLength[element.length]) {
            arrayLength[element.length] += 1;
        } else {
            arrayLength[element.length] = 1;
        }
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (arrayLength[element.length] === 1) {
            newArray.push(element)
        }
    }

    console.log(arrayLength);
    return newArray
}

console.log(removeStringWithSameLength(array));