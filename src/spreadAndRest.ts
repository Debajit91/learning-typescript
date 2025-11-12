// spread operator
// use case = copying, merging arrays/objects, passing array elements as function arguments

const friends = ['Utso', 'Shuvo'];

const schoolFriends = ['Diblu', 'Bishwa', 'Shovon'];

const collegeFriends = ['Shovon', 'Joy', 'Sumon'];

friends.push(...schoolFriends);
friends.push(...collegeFriends);
// console.log(friends);

const user = {name:"Deb", contact: "01783388518"};

const otherInfo = {hobby: "coding", favoriteColor: "Blue"};

const userInfo = {...user, ...otherInfo};

// console.log(userInfo);

// rest operator
// use case = function parameters (collects extra arguments), Destructuring (collects remaining properties)
const sendInvite = (...friends: string[]) => {
    friends.forEach((friend:string) => console.log(`Sent Invitation to ${friend}`))
};
sendInvite(...friends, 'Dev', 'Jeet');

// Here ...friends in function parameter is Rest Operator and ...friends in function argument is Spread Operator
