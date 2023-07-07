function populateWithDates(list) {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

  let dates = new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/bookings');
    request.responseType = 'json';

    request.onload = () => {
      resolve(request.response);
    };

    request.send();
  });

  dates.then(dates => {
    dates.forEach(date => {
      let listItem = document.createElement('li');
      listItem.textContent = date;
      list.appendChild(listItem);
    });
  });
}

function populateWithBookings(list, date) {
  let bookings = new Promise(resolve => {
    let request = new XMLHttpRequest();
    request.open('GET', `/api/bookings/${date}`);
    request.responseType = 'json';

    request.onload = () => {
      resolve(request.response);
    };

    request.send();
  });

  bookings.then(bookings => {
    bookings.forEach(booking => {
      let listItem = document.createElement('li');
      listItem.textContent = bookingString(booking);
      list.appendChild(listItem);
    });
  });
}

function bookingString(booking) {
  return booking.join(' | ');
}

document.addEventListener('DOMContentLoaded', () => {
  let dateList = document.querySelector('#dates');
  populateWithDates(dateList);

  dateList.addEventListener('click', (e) => {
    let listItem = e.target;
    let bookingList = document.createElement('ul');
    populateWithBookings(bookingList, listItem.textContent);
    listItem.appendChild(bookingList);
  });
});