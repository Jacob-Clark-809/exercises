function populateWithSchedules(select) {
  while (select.lastElementChild) {
    select.removeChild(select.lastElementChild);
  }

  let schedules = new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/schedules');
    request.responseType = 'json';

    request.onload = () => {
      resolve(request.response);
    };

    request.send();
  });

  let staff = new Promise(resolve => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/staff_members');
    request.responseType = 'json';

    request.onload = () => {
      resolve(request.response);
    };

    request.send();
  });

  Promise.all([schedules, staff]).then(([ schedules, staff ]) => {
    schedules.forEach(schedule => {
      if (schedule.student_email === null) {
        let option = document.createElement('option');
        option.value = schedule.id;
        option.textContent = formatOptionText(schedule, staff);
        select.appendChild(option);
      }
    });
  });
}

function formatOptionText(schedule, staff) {
  let staffName = staff.filter(staff => staff.id === schedule.staff_id)[0].name;

  return staffName + ' | ' + schedule.date + ' | ' + schedule.time;
}

document.addEventListener('DOMContentLoaded', () => {
  let scheduleForm = document.querySelector('#schedule');
  let select = document.querySelector('select');
  let studentDiv = document.querySelector('#studentDiv');
  let studentForm = studentDiv.querySelector('form');

  populateWithSchedules(select);

  scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(scheduleForm);
    let request = new XMLHttpRequest();
    request.open('POST', '/api/bookings');

    request.addEventListener('load', (e) => {
      switch (request.status) {
        case 204:
          alert('Booked');
          scheduleForm.reset();
          populateWithSchedules(select);
          break;
        case 404:
          alert(request.responseText);
          let email = scheduleForm.querySelector('input[name="student_email"]').value;
          let bookingSequence = request.responseText.match(/\d+/g)[0];
          displayStudentForm(email, bookingSequence);
          break;
      }
    });

    request.send(data);
  });

  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(studentForm);
    let request = new XMLHttpRequest();
    request.open('POST', '/api/students');

    request.addEventListener('load', (e) => {
      switch (request.status) {
        case 201:
          alert(request.responseText);
          studentDiv.style.display = 'none';
          scheduleForm.dispatchEvent(new Event('submit'));
          break;
        default:
          alert(request.responseText);
      }
    });

    request.send(data);
  });

  function displayStudentForm(email, bookingSequence) {
    studentForm.reset();
    studentForm.querySelector('input[name="email"]').value = email;
    studentForm.querySelector('input[name="booking_sequence"]').value = bookingSequence;
    studentDiv.style.display = 'block';
  }
});
