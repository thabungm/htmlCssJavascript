const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');

container1.addEventListener('click', function (event) {
  event.stopPropagation();

  console.log('Container 1');
});

container2.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('Container 2');
});

container3.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('Container 3');
});
