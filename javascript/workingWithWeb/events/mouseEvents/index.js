const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  console.log('click', event);
});

container.addEventListener('dblclick', function (event) {
  console.log('inside dblclick', event);
});

container.addEventListener('contextmenu', function (event) {
  console.log('right clicked', event);
});

container.addEventListener('mouseenter', function (event) {
  console.log('mouseenter', event);
});

container.addEventListener('mouseleave', function (event) {
  console.log('mouseleave', event);
});
