// 2.1 Insertar dinámicamente un div vacío
{
  const div = document.createElement('div');
  document.body.appendChild(div);
}

// 2.2 Insertar dinámicamente un div que contenga una p
{
  const div = document.createElement('div');
  const p = document.createElement('p');
  div.appendChild(p);
  document.body.appendChild(div);
}

// 2.3 Insertar dinámicamente un div que contenga 6 p utilizando un loop
{
  const div = document.createElement('div');
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    div.appendChild(p);
  }
  document.body.appendChild(div);
}

// 2.4 Insertar dinámicamente una p con el texto 'Soy dinámico!'
{
  const p = document.createElement('p');
  p.textContent = 'Soy dinámico!';
  document.body.appendChild(p);
}

// 2.5 Insertar en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
{
  const h2 = document.querySelector('h2.fn-insert-here');
  h2.textContent = 'Wubba Lubba dub dub';
}

// 2.6 Crear una lista ul > li con los textos del array apps
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

// 2.7 Eliminar todos los nodos que tengan la clase .fn-remove-me
{
  const nodesToRemove = document.querySelectorAll('.fn-remove-me');
  nodesToRemove.forEach((node) => node.remove());
}

// 2.8 Insertar una p con el texto 'Voy en medio!' entre los dos div vacíos
{
  const divs = document.querySelectorAll('body > div:not(.fn-insert-here)');
  const [firstDiv] = divs;
  const p = document.createElement('p');
  p.textContent = 'Voy en medio!';
  // No usamos appendChild: insertamos justo después del primer div con insertAdjacentElement
  firstDiv.insertAdjacentElement('afterend', p);
}

// 2.9 Insertar una p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
{
  const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
  insertHereDivs.forEach((div) => {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
  });
}
