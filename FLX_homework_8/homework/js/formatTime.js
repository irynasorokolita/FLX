function formatTime(minutesValue) {
  let days = Math.floor(minutesValue / 1440);
  let hours = Math.floor((minutesValue / 60) % 24);
  let minutes = Math.floor(minutesValue % 60);
  return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).'
}
formatTime(1500);
