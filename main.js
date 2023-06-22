// Concatenar cadenas: Dada una lista de cadenas, crea una función en JavaScript que recorra la lista y concatene todas las cadenas en una sola. Devuelve la cadena resultante.
let concatenarCadenas = (lista)=>{
    let cadenaResultante = '';
for(let i = 0; i < lista.length; i++){
    cadenaResultante += lista[i];
}
return cadenaResultante;
}
console.log(concatenarCadenas(['hola', ' mundo']));
console.log(concatenarCadenas(['hola', ' como', ' estas', ' el', ' dia', ' de', ' hoy']));