const SECONDS_PER_MINUTE = 60;
const MILLIS_PER_SECOND = 1000;

function timeOfDay(minutes) {
  const startDate = new Date('January 1, 2020, 00:00:00');
  let millis = minutes * SECONDS_PER_MINUTE * MILLIS_PER_SECOND;

  const currentDate = new Date();
  currentDate.setTime(startDate.getTime() + millis);

  console.log(formatTime(currentDate));
}

function formatTime(date) {
  let minutes = String(date.getMinutes());
  let hours = String(date.getHours());

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  if (hours.length === 1) {
    hours = '0' + hours;
  }

  return hours + ':' + minutes;
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"