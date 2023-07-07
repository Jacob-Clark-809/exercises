function getSchedules() {
  function logScheduleCounts() {
    let schedules = request.response;
    if (schedules.length === 0) {
      console.log('There are no schedules available for booking.');
      return;
    }

    let count = schedules.reduce((count, schedule) => {
      let staff = 'staff ' + String(schedule.staff_id);
      count[staff] = count[staff] || 0;
      count[staff] += 1;
      return count;
    }, {});

    console.log('Schedules:');
    Object.keys(count).forEach((staff) => {
      console.log(staff + ': ' + count[staff]);
    });
  }

  let request = new XMLHttpRequest();
  request.open('GET', 'https://a145ad063e0c4744b134fc839a0427c7.vfs.cloud9.eu-west-2.amazonaws.com/api/schedules');
  request.responseType = 'json';

  request.addEventListener('load', logScheduleCounts);
  request.addEventListener('loadend', () => console.log('Request complete.'));

  request.send();
  setTimeout(() => {
    if (request.status === 0) {
      console.log('Request took too long, try again later.');
      request.abort();
    }
  }, 5000);
}
