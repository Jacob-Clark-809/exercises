function populateWithStaff(select) {
  let request = new XMLHttpRequest();
  request.open('GET', '/api/staff_members');
  request.responseType = 'json';

  request.addEventListener('load', (e) => {
    let allStaff = request.response;
    allStaff.forEach((staff) => {
      let option = document.createElement('option');
      option.value = staff.id;
      option.textContent = staff.name;
      select.appendChild(option);
    });
  });

  request.send();
}

function formDataToJson(formData) {
  let json = {};
  json.schedules = [];
  let currentSchedule;
  for (let pair of formData) {
    if (pair[0] === 'staff_id') {
      if (currentSchedule) json.schedules.push(currentSchedule);
      currentSchedule = {};
      currentSchedule[pair[0]] = Number(pair[1]);
    } else {
      currentSchedule[pair[0]] = pair[1];
    }
  }
  json.schedules.push(currentSchedule);

  return JSON.stringify(json);
}

document.addEventListener('DOMContentLoaded', () => {
  let select = document.querySelector('select');
  populateWithStaff(select);

  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let submit = new XMLHttpRequest();
    let data = new FormData(form);
    let json = formDataToJson(data);
    submit.open('POST', '/api/schedules');
    submit.setRequestHeader('Content-Type', 'application/json');

    submit.addEventListener('load', () => {
      if (submit.status === 201) form.reset();
      alert(submit.responseText);
    });

    submit.send(json);
  });

  let button = document.querySelector('button');
  button.addEventListener('click', (e) => {
    e.preventDefault();

    let schedule = document.querySelector('.schedule');
    let newSchedule = schedule.cloneNode(true);
    let submit = document.querySelector('#submit');
    form.insertBefore(newSchedule, submit);
  });
});