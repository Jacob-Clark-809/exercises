/* global Handlebars */

const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

document.addEventListener('DOMContentLoaded', () => {
  function renderPage() {
    let questionList = Handlebars.compile(document.querySelector('#questionList').innerHTML);
    Handlebars.registerPartial('questionTemplate', document.querySelector('#questionTemplate').innerHTML);

    let questionsHtml = questionList({ questions });
    document.querySelector('fieldset').innerHTML = questionsHtml;
  }

  renderPage();

  document.querySelector('#submit_button').addEventListener('click', (e) => {
    e.preventDefault();

    let questionDivs = Array.from(document.querySelectorAll('.question'));
    questionDivs.forEach(div => {
      let id = div.dataset.id;
      let result = div.querySelector('.result');
      let choices = Array.from(div.querySelectorAll('input'));
      let answer = choices.find(choice => choice.checked);

      if (answer) {
        if (answer.value === answerKey[id]) {
          result.textContent = 'Correct Answer';
          result.classList.add('correct');
        } else {
          result.textContent = 'Wrong Answer. The correct answer is : ' + answerKey[id];
          result.classList.add('wrong');
        }
      } else {
        result.textContent = 'You did not answer this question. The correct answer is : ' + answerKey[id];
        result.classList.add('wrong');
      }
    });

    e.currentTarget.setAttribute('disabled', true);
    document.querySelector('#reset_button').removeAttribute('disabled');
  });

  document.querySelector('#reset_button').addEventListener('click', (e) => {
    e.preventDefault();

    let results = Array.from(document.querySelectorAll('.result'));
    results.forEach(result => {
      result.classList.remove('correct', 'wrong');
      result.textContent = '';
    });

    document.querySelector('form').reset();
    e.currentTarget.setAttribute('disabled', true);
    document.querySelector('#submit_button').removeAttribute('disabled');
  });
});
