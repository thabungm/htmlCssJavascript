/* const rhyme = `
    Humpty Dumpty sat on a wall  
    Humpty Dumpty had a great fall
    Humpty Dumpty had a great fall
    Humpty Dumpty had a great fall
    Humpty Dumpty had a great fall
`;

const pattern = /\w{1}all/g;
console.log(rhyme.replace(pattern, 'chair')); */
/* const inputString = 'hello world';
console.log(inputString.replace(/\w/g, '1')); */

/* 
const text = `Place A is 100 miles 5 degree away from place B.
Place B is 200 Miles away from place C
`;
console.log(text.replace(/\d+(?= miles)/gi, (miles) => miles * 1.6)); 
*/

/* const text = `Place A is 100 miles  away from place B.
Place B is 200 Miles away from place C
`;
// 1mile = 1.6km

// console.log(text.replace(/miles/gi, 'kms'));
const result = text.replace(/\d+(?!miles)/gi, (miles) => miles * 1.6);
const finalResult = result.replace(/miles/gi, 'kms');
console.log(finalResult); */

const text = 'Colour or color means the same thing';
const pattern = /colou?r/gi;
text.replace(pattern, function (match) {
  console.log(match);
});
