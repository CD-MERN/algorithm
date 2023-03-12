/*
Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz en ese índice. 
Haz esto sin usar métodos de matriz integrados, excepto pop(). 
Piensa en popFront(arr) como equivalente a removeAt(arr, 0).
*/

let arr = [1, 2, 3, 4, 5, 6, 10]

const deleteAt = (arr, idx) => {

    const deleted = arr[idx]

    for (i = idx; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }

    arr.pop();

    return deleted
}

console.log(deleteAt(arr, 2));
console.log(arr);