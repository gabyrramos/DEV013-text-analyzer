import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`
const textArea = document.querySelector('textarea[name="user-input"]');
const resetBoton = document.getElementById('reset-button');

textArea.addEventListener("input", function(){
  const wordCount = analyzer.getWordCount(textArea.value);
  document.querySelector('li[data-testid="word-count"]').innerHTML = "Numero de palabras:" + wordCount;

  const charCount = analyzer.getCharacterCount(textArea.value);
  document.querySelector('li[data-testid="character-count"]').innerHTML = "Caracteres:" + charCount;

  const charNoSpace = analyzer.getCharacterCountExcludingSpaces(textArea.value);
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML = "Caracteres sin espacio:" + charNoSpace;

  const wordLenghtAve = analyzer.getAverageWordLength(textArea.value);
  document.querySelector('li[data-testid="word-lenght-average"]').innerHTML = "Promedio longitud de palabras:" + wordLenghtAve;

  const numberCount = analyzer.getNumberCount(textArea.value);
  document.querySelector('li[data-testid="number-count"]').innerHTML = "Recuento de numeros:" + numberCount;

  const numberSum = analyzer.getNumberSum(textArea.value);
  document.querySelector('li[data-testid="number-sum"]').innerHTML = "Suma total de numeros:" + numberSum;
  
})

resetBoton.addEventListener("click", function(){
  const textArea = document.querySelector('textarea[name="user-input"]');
  textArea.value = "";
  const eventoInput = new InputEvent("input",{
    value: ""
  })
  textArea.dispatchEvent(eventoInput);
});