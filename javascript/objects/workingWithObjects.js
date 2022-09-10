const course = {
  name: 'MERN',
  durationInMonths: 3,
};

const player = {
  name: 'Mike',
  score: 3,
  address: {
    street: '#14 East',
    contact: {
      mobile: '9738412345',
      landline: 'ABC-123',
    },
  },
};

/* const player2 = player;
player2.name = 'Xyz';
console.log(player); */
// mutations -> add/ remove/delete
// Destructuring & spread operator from es6

/* const player2 = Object.assign({}, player);
player2.name = 'Xyz';
console.log(player); */
/* const player2 = { ...player };
player2.name = 'Xyz';
console.log(player) */

/* 
const mobile = player.address.contact.mobile;
const name = player.name;
const score = player.score;
 */

// destructuring assignment
const {
  name,
  score,
  address: {
    contact: { mobile },
  },
} = player;
console.log(name, score, mobile);
// get
