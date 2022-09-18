let cities = [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 },
  { name: 'Chicago', population: 2695598 },
  { name: 'Houston', population: 2099451 },
  { name: 'Philadelphia', population: 1526006 },
];

//find the city whose population is greater than 3 million
const result = cities.filter(function (ele) {
  if (ele.population > 3000000) {
    return true;
  } else {
    return false;
  }
});
console.log(result);
