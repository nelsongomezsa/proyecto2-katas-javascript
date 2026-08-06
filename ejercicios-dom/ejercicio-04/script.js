// evento click del boton
const btnToClick = document.querySelector('#btnToClick');
btnToClick.addEventListener('click', (event) => {
  console.log(event);
});

// evento focus del input
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
  console.log(event.target.value);
});

// evento input del input
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
  console.log(event.target.value);
});
