// const today = new Date();
// console.log(today);
// console.log(today.toDateString());
// console.log(today.toLocaleDateString());
/*
 console.log(
  today.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })
);

console.log(today.toLocaleTimeString('en-US', { timeZone: 'Japan' }));
console.log(today.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));
 */
/* const newDate = new Date('11 February, 2021 14:45:30');
console.log(newDate.toLocaleString()); */

/* const newDate = new Date(2021, 3, 21, 23, 30, 45);
console.log(newDate.toLocaleString()); */
/* const timezones = [
  'America/New_York',
  'Japan',
  'Asia/Kolkata',
  'America/Bahia',
];
const now = new Date(); */

// getter methods
// console.log(now.getDate());
// console.log(now.getDay()); // starts from 0
// console.log(now.getMonth()); // starts from 0
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTimezoneOffset() / 60); // showing negative
// console.log(now.toTimeString());

// setter methods
// console.log(now);
// // now.setFullYear(2050);
// // now.setMonth(0);
// now.setHours(23);
// console.log(now.toLocaleString());

/* const options = {
    weekday: 'lo'
} */

/* console.log(
  now.toLocaleDateString('en-us', {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  })
);
 */
const timezones = [
  'America/New_York',
  'Japan',
  'Asia/Kolkata',
  'America/Bahia',
];

/* const today = new Date();
timezones.forEach(function (timezone) {
  console.log(
    timezone,
    today.toLocaleTimeString('en-US', { timeZone: timezone })
  );
}); */

let date = new Date();

for (let i = 0; i < timezones.length; i++) {
  //date=timezones[i];
  console.log(
    timezones[i],
    date.toLocaleTimeString('en-us', {
      timeZone: timezones[i],
      hour: '2-digit',
      minute: '2-digit',
    })
  );
}
