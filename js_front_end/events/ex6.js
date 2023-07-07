const classifications = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
};

document.addEventListener('DOMContentLoaded', () => {
  let classificationSelect = document.querySelector('#animal-classifications');
  let animalSelect = document.querySelector('#animals');

  classificationSelect.addEventListener('change', (e) => {
    let choice = e.target.value;
    let animalOptions = Array.from(animalSelect.children);

    animalOptions.forEach((animalElement) => {
      if (classifications[choice].includes(animalElement.value)) {
        animalElement.removeAttribute('hidden');
      } else {
        animalElement.setAttribute('hidden', true);
      }
    });
  });

  animalSelect.addEventListener('change', (e) => {
    let choice = e.target.value;
    let classificationOptions = Array.from(classificationSelect.children);

    classificationOptions.forEach((classificationElement) => {
      if (classificationElement.value !== 'Classifications' &&
          classifications[classificationElement.value].includes(choice)) {
        classificationElement.removeAttribute('hidden');
      } else {
        classificationElement.setAttribute('hidden', true);
      }
    });
  });

  let clear = document.querySelector('#clear');
  clear.addEventListener('click', (e) => {
    e.preventDefault();
    Array.from(animalSelect.children).forEach((el) => el.removeAttribute('hidden'));
    Array.from(classificationSelect.children).forEach((el) => el.removeAttribute('hidden'));

    animalSelect.firstElementChild.setAttribute('selected', true);
    classificationSelect.firstElementChild.setAttribute('selected', true);
  });
});
