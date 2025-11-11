// array, object

// ts - tuple

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

// Tuple type is a special type of Array type
// It can be defined like these: [number, number] or [string, string] or [string, number] or [number, number, string] etc.
// One thing should be remember that the number of element of the array will be as the number of type
let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "wife"];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];
// here at the time of type defining the quantity of type is 3 so the number of element in the array will be 3, we can not keep more than 3 element