const timezones = ['Japan', 'Asia/Kolkata', 'America/Bahia'];
const timerHandler = [];

let date = new Date();

for (let i = 1; i <= timezones.length; i++) {
  displayClock(i);
}

function toggleClock(btn, clock, zone) {
  if ((btn.value = 'Play')) {
    btn.value = 'Pause';
    timerHandler = setInterval(function () {
      const date = new Date();
      const timeNow = date.toLocaleTimeString('en-us', {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      clock.innerHTML = timeNow;
    }, 1000);
  }
}

function displayClock(timeZoneIndex) {
  const parent = document.createElement('div');
  parent.setAttribute('id', `container${timeZoneIndex}`);

  const btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.setAttribute('value', 'Play');
  btn.setAttribute('class', 'btn');
  btn.setAttribute('id', `button${timeZoneIndex}`);
  parent.appendChild(btn);
  btn.addEventListener('click', function (event) {
    console.log(event.target.value);
    if (event.target.value === 'Pause') {
      event.target.value = 'Play';
      timerHandler[timeZoneIndex] = setInterval(function () {
        const date = new Date();
        const timeNow = date.toLocaleTimeString('en-us', {
          timeZone: timezones[timeZoneIndex],
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        clock.innerHTML = timeNow;
      }, 1000);
    } else {
      clearInterval(timerHandler[timeZoneIndex]);
      event.target.value = 'Pause';
    }
  });
  const clock = document.createElement('div');
  timerHandler[timeZoneIndex] = setInterval(function () {
    const date = new Date();
    const timeNow = date.toLocaleTimeString('en-us', {
      timeZone: timezones[timeZoneIndex],
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    clock.innerHTML = timeNow;
  }, 1000);
  parent.append(clock);
  document.body.append(parent);
}
