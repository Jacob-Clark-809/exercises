function cancelSchedule(id) {
  let request = new XMLHttpRequest();
  request.open('DELETE', `/api/schedules/${id}`);

  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert('Schedule deleted.');
    } else {
      alert(request.responseText);
    }
  });

  request.send();
}

function cancelBooking(id) {
  let request = new XMLHttpRequest();
  request.open('PUT', `/api/bookings/${id}`);

  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert('Booking deleted.');
    } else {
      alert(request.responseText);
    }
  });

  request.send();
}