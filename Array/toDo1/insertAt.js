/*
Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el índice dado. 
Haz esto sin utilizar métodos de matriz integrados. 
Puedes pensar en pushFront(arr, val) como equivalente a insertAt(arr, 0, val).
*/

let arr = [1, 2, 3, 4, 5, 6, 10]

const insertAt = (arr, idx, value) => {



    for (i = arr.length; i > idx; i--) {
        arr[i] = arr[i - 1];
    }

    arr[idx] = value;


    return arr
}

console.log(insertAt(arr, 2, 11));