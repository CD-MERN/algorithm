/*
Intercambia posiciones de pares sucesivos de los valores de una matriz dada. 
Si la longitud es impar, no cambies el elemento final. 
Para [1,2,3,4], devuelve [2,1,4,3]. Por ejemplo, cambia la entrada ["Brendan", verdadero, 42] a [verdadero, "Brendan", 42]. 
Al igual que con todos los desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.
*/

const swapPairs = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 2) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
    }

    return arr
}

let arr = [1, 2, 3, 4];
console.log(swapPairs(arr));


let arr2 = ["Brendan", true, 42];
console.log(swapPairs(arr2));