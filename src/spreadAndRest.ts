// spread operator

const friends = ['Utso', 'Shuvo'];

const schoolFriends = ['Diblu', 'Bishwa', 'Shovon'];

const collegeFriends = ['Shovon', 'Joy', 'Sumon'];

friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);

const user = {name:"Deb", contact: "01783388518"};

const otherInfo = {hobby: "coding", favoriteColor: "Blue"};

const userInfo = {...user, ...otherInfo};

console.log(userInfo);