// object destructuring

const user = {
  id: 123,
  name: {
    firstName: "Deb",
    middleName: "Jeet",
    lastName: "Roy",
  },
  gender: "male",
  age: 35,
  favoriteColor: "blue",
};

// id = normal destructuring
// name = nested destructuring
// age: MyAge = name alias
const {
  id,
  name: { firstName, lastName },
  age: MyAge,
} = user;


// console.log(
//   "UserId:",
//   id + ",",
//   "Name:",
//   firstName + " " + lastName + ",",
//   "My age is:",
//   MyAge
// );


// array destructuring
const teamMembers = ['Utso', 'Bijoy', 'Nirob', 'Shuvo', 'Dev'];
const [, , , teamCoLeader] = teamMembers; //skip element by using ','
console.log(teamCoLeader);