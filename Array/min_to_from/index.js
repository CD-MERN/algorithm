/*Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, 
desplazando hacia atrás los elementos que estaban antes. De lo contrario, no cambies el
 orden de la matriz. Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo. 
 Como siempre, haz esto sin usar funciones integradas. */

const array = [4, 2, 1, 3, 5];

const minToFrom = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            let temp = min;
            min = array[i];
            array[i] = temp;
            array[0] = min;
        }
    }

    return array;

}

console.log(minToFrom(array));