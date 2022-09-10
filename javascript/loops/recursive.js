// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
function recursiveFunction(counter, maxCount) {
  console.log(counter);
  if (counter < maxCount) {
    recursiveFunction(counter + 1, maxCount);
  }
}
recursiveFunction(0, 10);
