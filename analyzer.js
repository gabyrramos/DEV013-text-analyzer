/* eslint-disable no-unused-vars */
const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(/\s+/);
    if (text === "") return 0;
    return palabras.length;
    
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const carNoEspacio = text.replace(/\s/g, '');
    return carNoEspacio.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(/\s+/);
    let longitudPalabras = 0;
    //un metodo es usando reduce=
    //const longitudPalabras = palabras.reduce(function(total, palabra) {
    // return total + palabra.length;
    //}, 0);
   
    //usando forEach, para que itere en las palabras
    //palabras.forEach(function(palabra) {
    //longitudPalabras += palabra.length;
    //});

    //usando for para usar bucles
    for (let i=0 ; i <palabras.length; i++){
      longitudPalabras += palabras[i].length;
    }
    const promedio = palabras.length > 0 ? longitudPalabras / palabras.length : 0;
    return promedio;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numerosContados = text.match(/\d+/g);
    if (!numerosContados){
      return 0;
    } else
      return numerosContados.length;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numerosContados = text.match(/\d+/g);
    if (!numerosContados){
      return 0;
    }
    const suma = numerosContados.reduce(function (total, numero) {
      return total + parseInt(numero, 10);
    }, 0); 
    return suma;
  }
}
  

export default analyzer;
