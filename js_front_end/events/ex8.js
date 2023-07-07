function delegateEvent(parentElement, selector, eventType, callback) {
  if (!document.contains(parentElement)) return;

  parentElement.addEventListener(eventType, (e) => {
    let allMatches = Array.from(parentElement.querySelectorAll(selector));

    if (allMatches.includes(e.target)) {
      callback(e);
    }
  });

  return true;
}

let element1, element2, element3, callback;

document.addEventListener('DOMContentLoaded', () => {
  // Possible elements for use with the scenarios
  element1 = document.querySelector('table');
  element2 = document.querySelector('main h1');
  element3 = document.querySelector('main');

  // Possible callback for use with the scenarios
  callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };
});
