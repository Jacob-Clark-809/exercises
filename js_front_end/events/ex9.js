let tracker = (function () {
  let events = [];

  return {
    addEvent(e) {
      if (!events.includes(e)) {
        events.push(e);
      }
    },

    list() {
      return Array.from(events);
    },

    elements() {
      return events.map(event => event.target);
    },

    clear() {
      events = [];
      return 0;
    }
  };
})();

function track(callback) {
  return function(e) {
    tracker.addEvent(e);
    callback(e);
  };
}

let divRed, divBlue, divOrange, divGreen;

document.addEventListener('DOMContentLoaded', () => {
  divRed = document.querySelector('#red');
  divBlue = document.querySelector('#blue');
  divOrange = document.querySelector('#orange');
  divGreen = document.querySelector('#green');
});