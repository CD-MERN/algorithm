/*
Eliminar duplicados
Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones de varias fuentes. 
Su asistente los ordenó alfabéticamente, pero notó algunos duplicados. 
Dada una matriz ordenada, elimina los valores duplicados. 
Debido a que los elementos de la matriz ya están en orden, todos los valores duplicados se agruparán. 
Al igual que con todos estos desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.
Segundo: resuelve esto sin usar ningún bucle anidado.
*/

let arr = [1, 1, 2, 3, 4, 5, 6, 7, 7, 10, 10]

const removeDuplicates = (array) => {
    newArr = [];
    for (let i = 0; i < array.length; i++) {
        let check = array[i];
        if (check !== array[i + 1]) {
            newArr.push(array[i]);
        }
    }
    return newArr
}

console.log(removeDuplicates(arr));
console.log(arr);