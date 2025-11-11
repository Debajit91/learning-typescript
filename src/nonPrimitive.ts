// array, object

let bazarList = ["rice", "sugar", "dal"];
bazarList.push("soap");
console.log(bazarList);
// bazarList.push(12); here number type of data can not be pushed as typescript implicitly take it as array of string

// we can also explicitly declared it as array of string
let bazarList2: string[] = ["soap", "tissue", "muri" ]

// We can also declared mixed type of array implicitly or explicitly
let mixedArray:(string | number)[] = ["rice", 12, "dal", 2, "soap", 2]
// then we can push here any of the type string or number
mixedArray.push(12);
console.log(mixedArray);
// but can not boolean
// mixedArray.push(true);