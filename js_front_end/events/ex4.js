document.querySelector('img').addEventListener('click', event => {
  event.stopPropagation();
}, false);

/*
The code on line 2 should  be replaced with event.preventDefault(). Otherwise,
the anchor that the image is wrapped in will still be followed.
*/