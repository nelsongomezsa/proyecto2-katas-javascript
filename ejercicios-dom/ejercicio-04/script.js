// 1.1 Botón #btnToClick con evento click que muestra la info del evento
const btnToClick = document.querySelector('#btnToClick');
btnToClick.addEventListener('click', (event) => {
  console.log(event);
});

// 1.2 Evento 'focus' en el input .focus que muestra su valor
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
  console.log(event.target.value);
});

// 1.3 Evento 'input' en el input .value que muestra su valor
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
  console.log(event.target.value);
});
