let todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener('DOMContentLoaded', () => {
  function renderPage() {
    let list = document.querySelector('#todos');

    todo_items.forEach(item => {
      let listItem = document.createElement('li');
      listItem.textContent = item.title;
      listItem.dataset.id = item.id;

      let button = document.createElement('button');
      button.classList.add('remove');
      button.textContent = 'Delete';

      listItem.appendChild(button);
      list.appendChild(listItem);
    });
  }

  renderPage();

  let list = document.querySelector('#todos');
  let confirmationPrompt = document.querySelector('.confirmation_prompt');
  let contextMenu = document.querySelector('.context_menu');

  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      e.preventDefault();

      confirmationPrompt.dataset.id = e.target.parentElement.dataset.id;
      confirmationPrompt.style.display = 'block';
    }
  });

  confirmationPrompt.querySelector('#yes').addEventListener('click', (e) => {
    e.preventDefault();

    let id = confirmationPrompt.dataset.id;
    list.querySelector(`li[data-id="${id}"]`).style.display = 'none';
    confirmationPrompt.style.display = 'none';
  });

  confirmationPrompt.querySelector('#no').addEventListener('click', (e) => {
    e.preventDefault();

    confirmationPrompt.style.display = 'none';
  });

  list.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'LI') {
      e.preventDefault();

      confirmationPrompt.dataset.id = e.target.dataset.id;

      contextMenu.style.top = e.clientY + 'px';
      contextMenu.style.left = e.clientX + 'px';

      contextMenu.classList.add('visible');
    }
  });

  document.body.addEventListener('click', (e) => {
    if (e.target !== confirmationPrompt && e.target.parentElement !== confirmationPrompt) {
      confirmationPrompt.style.display = 'none';
    }

    if (e.target !== contextMenu && e.target.parentElement !== contextMenu) {
      contextMenu.classList.remove('visible');
    }
  }, true);

  contextMenu.addEventListener('click', (e) => {
    if (e.target.textContent === 'Delete') {
      contextMenu.classList.remove('visible');
      confirmationPrompt.style.display = 'block';
    }
  });
});