document.addEventListener('DOMContentLoaded', () => {
  function removeHighlighted() {
    let previouslyHighlighted = document.querySelector('.highlight');
    if (previouslyHighlighted) {
      previouslyHighlighted.classList.remove('highlight');
    }
  }

  let nav = document.querySelector('ul');

  nav.addEventListener('click', (e) => {
    e.stopPropagation();
    removeHighlighted();
    document.querySelector(e.target.getAttribute('href')).classList.add('highlight');
  });

  document.addEventListener('click', (e) => {
    removeHighlighted();

    let articles = document.querySelectorAll('article');
    let changed = false;
    for (let index = 0; index < articles.length; index += 1) {
      if (articles[index].contains(e.target)) {
        articles[index].classList.add('highlight');
        changed = true;
        break;
      }
    }

    if (!changed) {
      document.querySelector('main').classList.add('highlight');
    }
  });
});