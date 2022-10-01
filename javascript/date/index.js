/* // onclick
let isOn = true; // false

if (isOn === true) {
  // timer running
  // setInterval() // hh:mm:ss
}

if (isOn === false) {
  // clearInterval
}
 */

let isOn = true;
const clock = document.querySelector('.clock');
let timerHandler;
// Switch the on/off timer
function toggleClock() {
  if (isOn) {
    isOn = false;
    timerHandler = setInterval(function () {
      const date = new Date();
      const timeNow = date.toLocaleTimeString('en-us', {
        // timeZone: timezones[i],
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      clock.innerHTML = timeNow;
    }, 1000);
  } else {
    isOn = true;
    clearInterval(timerHandler);
  }
}

toggleClock();
