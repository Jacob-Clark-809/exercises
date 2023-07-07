document.querySelector('html').addEventListener('click', (e) => {
  const container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});
