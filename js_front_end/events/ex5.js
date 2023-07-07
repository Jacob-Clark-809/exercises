document.addEventListener('DOMContentLoaded', () => {
  let main = document.querySelector('main');
  main.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    if (e.target.id === 'sub') {
      alert('sub');
    } else {
      alert(e.target.tagName);
    }
  });
});