function colorGeneration(generation) {
  if (generation < 1) return;

  let currentLevel = Array.from(document.body.children);
  for (let index = 1; index < generation; index += 1) {
    currentLevel = currentLevel.map(element => Array.from(element.children)).flat();
  }

  currentLevel.forEach(element => element.classList.add('generation-color'));
}