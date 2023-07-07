document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  form.addEventListener('focusout', (e) => {
    let input = e.target;
    let label = input.parentElement.firstElementChild;
    let fieldName = label.textContent.slice(0, -1);

    if (input.validity.valueMissing) {
      addErrorMessage(fieldName + ' is a required field.', input);
    } else if (input.validity.patternMismatch) {
      addErrorMessage('Please enter a valid ' + fieldName + '.', input);
    } else if (input.validity.tooShort) {
      let minLength = input.getAttribute('minlength');
      addErrorMessage(fieldName + ' must be at least ' + minLength + ' characters long.', input);
    }
  });

  form.addEventListener('focusin', removeErrorMessage);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formError = document.querySelector('#form_error');
    let inputs = Array.from(document.querySelectorAll('input'));

    if (inputs.every(input => input.checkValidity())) {
      formError.textContent = '';
      alert('Form submitted!');
      let dataElement = document.createTextNode(serializeData(form));
      document.querySelector('block').appendChild(dataElement);
      form.reset();
    } else {
      formError.textContent = 'Form cannot be submitted until errors are corrected.';
    }
  });

  form.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' || e.key === 'Tab') return;

    let input = e.target;

    if (input.dataset.allowedChars) {
      let regex = new RegExp(input.dataset.allowedChars);

      if (!e.key.match(regex)) {
        e.preventDefault();
      }
    }
  });

  let creditCard = document.querySelector('.credit_card');
  creditCard.addEventListener('keyup', (e) => {
    let input = e.target;

    if (input.tagName === 'INPUT') {
      if (input.value.length === 4) {
        input.nextElementSibling.focus();
      }
    }
  });

  function addErrorMessage(message, input) {
    input.parentElement.querySelector('.error_message').textContent = message;
  }

  function removeErrorMessage(e) {
    if (e.target.tagName !== 'INPUT') return;

    e.target.parentElement.querySelector('.error_message').textContent = '';
  }

  function serializeData(form) {
    let inputs = Array.from(document.querySelectorAll('input'));
    let keyValues = [];
    let cardNumber = '';

    inputs.forEach(input => {
      if (input.getAttribute('name') === 'credit_card') {
        cardNumber += input.value;
      } else {
        keyValues.push(encodeURIComponent(input.getAttribute('name')) + '=' + encodeURIComponent(input.value));
      }
    });

    keyValues.push(encodeURIComponent('credit_card') + '=' + encodeURIComponent(cardNumber));

    return keyValues.join('&');
  }
});