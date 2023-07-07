const MAX_CHARS = 120;

const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  function renderPage() {
    languages.forEach((language, index) => {
      let header = document.createElement('h4');
      header.textContent = language.name;

      let paragraph = document.createElement('p');
      paragraph.textContent = language.description.slice(0, MAX_CHARS) + ' ...';

      let button = document.createElement('button');
      button.textContent = 'Show More';

      let div = document.createElement('div');
      div.id = index;

      div.appendChild(header);
      div.appendChild(paragraph);
      div.appendChild(button);

      document.body.appendChild(div);
    });
  }

  function showMore(button) {
    let index = button.parentElement.id;
    button.previousElementSibling.textContent = languages[index].description;
    button.textContent = 'Show Less';
  }

  function showLess(button) {
    button.previousElementSibling.textContent =
      button.previousElementSibling.textContent.slice(0, MAX_CHARS) + ' ...';
    button.textContent = 'Show More';
  }

  renderPage();

  document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      let button = e.target;

      if (button.textContent === 'Show More') {
        showMore(button);
      } else {
        showLess(button);
      }
    }
  });
});