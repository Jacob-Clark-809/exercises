/* global Handlebars */

const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

document.addEventListener('DOMContentLoaded', () => {
  function compileTemplates() {
    let templates = {};

    Array.from(document.querySelectorAll('script[type="text/x-handlebars"]')).forEach(template => {
      templates[template.id] = Handlebars.compile(template.innerHTML);

      if (template.dataset.type === 'partial') {
        Handlebars.registerPartial(template.id, template.innerHTML);
      }
    });

    return templates;
  }

  function getUniqueProperties(collection, key) {
    let result = [];

    collection.forEach(item => {
      if (!result.includes(item[key])) {
        result.push(item[key]);
      }
    });

    return result;
  }

  function getFilterChoices() {
    let selects = Array.from(filters.querySelectorAll('select'));
    let choices = {};

    selects.forEach(select => {
      choices[select.name.toLowerCase()] = select.value;
    });

    return choices;
  }

  function filterButtonListener(e) {
    let choices = getFilterChoices();

    let matches = cars.filter(car => {
      let keys = Object.keys(choices);

      for (let index = 0; index < keys.length; index += 1) {
        let currentKey = keys[index];

        if (choices[currentKey] !== 'Any') {
          if (String(car[currentKey]) !== choices[currentKey]) return false;
        }
      }

      return true;
    });

    renderCars(matches);
  }

  function renderFilters(location) {
    ['Make', 'Model', 'Price', 'Year'].forEach(title => {
      let options = getUniqueProperties(cars, title.toLowerCase());
      let selectHtml = templates.selectTemplate({ title, options });
      location.insertAdjacentHTML('beforeend', selectHtml);
    });

    let button = document.createElement('button');
    button.classList.add('filter_btn');
    button.textContent = 'Filter';
    location.appendChild(button);

    button.addEventListener('click', filterButtonListener);
  }

  function renderCars(cars) {
    let carsHtml = templates.carsList({ cars });
    carsDiv.innerHTML = carsHtml;
  }

  function replaceOptions(select, newOptions) {
    Array.from(select.children).forEach(option => {
      if (option.value === 'Any') return;

      if (newOptions.length > 0) {
        let newOption = newOptions.shift();
        option.value = newOption;
        option.textContent = newOption;
      } else {
        select.removeChild(option);
      }
    });

    newOptions.forEach(newOption => {
      let option = document.createElement('option');
      option.value = newOption;
      option.textContent = newOption;
      select.appendChild(option);
    });
  }

  let templates = compileTemplates();
  let filters = document.querySelector('#filters');
  let carsDiv = document.querySelector('#cars');

  renderFilters(filters);
  renderCars(cars);

  filters.querySelector('#Make').addEventListener('input', (e) => {
    let valueSelected = e.currentTarget.value;
    let carsOfSelectedMake;

    if (valueSelected === 'Any') {
      carsOfSelectedMake = cars;
    } else {
      carsOfSelectedMake = cars.filter(car => car.make === valueSelected);
    }

    let possibleModels = getUniqueProperties(carsOfSelectedMake, 'model');

    replaceOptions(filters.querySelector('#Model'), possibleModels);
  });
});