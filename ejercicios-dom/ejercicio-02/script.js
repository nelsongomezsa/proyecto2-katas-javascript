// crea un div vacio
{
  const div = document.createElement('div');
  document.body.appendChild(div);
}

// crea un div con una p dentro
{
  const div = document.createElement('div');
  const p = document.createElement('p');
  div.appendChild(p);
  document.body.appendChild(div);
}

// crea un div con 6 p usando un loop
{
  const div = document.createElement('div');
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    div.appendChild(p);
  }
  document.body.appendChild(div);
}

// crea una p con texto
{
  const p = document.createElement('p');
  p.textContent = 'Soy dinámico!';
  document.body.appendChild(p);
}

// cambia el texto del h2
{
  const h2 = document.querySelector('h2.fn-insert-here');
  h2.textContent = 'Wubba Lubba dub dub';
}

// crea la lista de apps
{
  const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
  const ul = document.createElement('ul');

  apps.forEach((app) => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

// borra los que tienen la clase fn-remove-me
{
  const nodesToRemove = document.querySelectorAll('.fn-remove-me');
  nodesToRemove.forEach((node) => node.remove());
}

// mete una p en medio de los dos div
{
  const divs = document.querySelectorAll('body > div:not(.fn-insert-here)');
  const [firstDiv] = divs;
  const p = document.createElement('p');
  p.textContent = 'Voy en medio!';
  firstDiv.insertAdjacentElement('afterend', p);
}

// mete una p dentro de los div fn-insert-here
{
  const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
  insertHereDivs.forEach((div) => {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
  });
}
