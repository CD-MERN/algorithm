/*
Alan es bueno para descifrar códigos secretos. 
Un método consiste en eliminar los valores que se encuentran dentro de un rango conocido específico. 
Dado arr y los valores min y max, conserva solo los valores de la matriz entre min y max. 
Trabajo en el lugar: devuelve la matriz que se te proporcionó con los valores en el orden original. 
Sin usar funciones de matriz integradas. 
*/

const mat = [4, 2, 1, 3, 5];


const filter = (array, min, max) => {
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if (e >= min && e <= max) {

        } else {
            array.splice(i, 1);
        }

    }
    return array
}

console.log(filter(mat, 2, 4));