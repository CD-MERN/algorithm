/* 
Dada una matriz numérica, invierte el orden de los valores, en el lugar. 
La matriz invertida debe tener la misma longitud, con los elementos existentes 
movidos a otros índices para que el orden de los elementos se invierta. 
Trabajar "en el lugar" significa que no puedes utilizar una segunda matriz; 
mueve los valores dentro de la matriz que se te proporciona. 
Como siempre, no utilices funciones de matriz integradas como splice().
*/

const mat = [4, 2, 1, 3, 5];


const reverse = (array) => {
    let max = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        if (i == max) {
            break;
        }
        let swap = array[i];
        array[i] = array[max];
        array[max] = swap;
        max--
    }
    return array
}

console.log(reverse(mat));