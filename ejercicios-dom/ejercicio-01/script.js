// 1.1 Mostrar por consola el botón con la clase .showme
const showmeButton = document.querySelector('.showme');
console.log(showmeButton);

// 1.2 Mostrar por consola el h1 con el id #pillado
const pilladoTitle = document.querySelector('#pillado');
console.log(pilladoTitle);

// 1.3 Mostrar por consola todos los p (querySelectorAll porque son varios)
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 1.4 Mostrar por consola todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll('.pokemon');
console.log(allPokemon);

// 1.5 Mostrar por consola todos los elementos con el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(allTestMe);

// 1.6 Mostrar por consola el 3er personaje con el atributo data-function="testMe"
const thirdTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdTestMe);
