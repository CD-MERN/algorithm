/*
Quitar espacios en blanco
Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic". 
*/

let string = 'Pl ayTha tF u nkyM usi c';


const removeWhiteSpace = (string) => {
    return string.split(' ').join('');
}

console.log(removeWhiteSpace(string));