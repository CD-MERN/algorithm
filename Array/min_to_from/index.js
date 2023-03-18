/*Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, 
desplazando hacia atrás los elementos que estaban antes. De lo contrario, no cambies el
 orden de la matriz. Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo. 
 Como siempre, haz esto sin usar funciones integradas. */

const mat = [4, 2, 1, 3, 5];

const merge = (leftArr, rightArr) => {
    arraySorted = [];
    while (leftArr.length, rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            arraySorted.push(leftArr.shift());
        } else {
            arraySorted.push(rightArr.shift());
        }
    }
    return [...arraySorted, ...leftArr, ...rightArr];
}

const mergeSort = (array) => {
    if (!array.length) {
        return []
    }
    if (array.length == 1) {
        return array
    }
    const half = parseInt(array.length / 2);

    let leftArr = array.splice(0, half);
    let rightArr = array;

    let leftArraySorted = mergeSort(leftArr);
    let rightArraySorted = mergeSort(rightArr);

    return merge(leftArraySorted, rightArraySorted);
}

console.log(mergeSort(mat));