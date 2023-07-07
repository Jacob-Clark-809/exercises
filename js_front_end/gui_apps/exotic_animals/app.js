document.addEventListener('DOMContentLoaded', () => {
  let div = document.querySelector('#exotic_animals');
  let timeout;

  div.addEventListener('mouseenter', (e) => {
    if (e.target.tagName === 'IMG') {
      timeout = setTimeout(() => {
        e.target.nextElementSibling.style.display = 'block';
      }, 2000);
    }
  }, true);

  div.addEventListener('mouseleave', (e) => {
    if (e.target.tagName === 'IMG') {
      clearTimeout(timeout);
      e.target.nextElementSibling.style.display = 'none';
    }
  }, true);
});
