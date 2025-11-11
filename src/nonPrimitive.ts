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


// reference type: object

// Optional type: If property type is defined then property should not be missing. To get rid of this we can use optional symbol: '?' it is called optional type.

// Literal Type: When property value is defined as type then it is called the Literal Type. Use Case: If we want that property value should never be changed then we can define the value as type. Here the type of department can be defined as Programmer if we want to set rule that the value of department can not be changed.

// Access Modifier: we can also use readonly at type defining time if we don't want to let change the property value in future.
const user:{
    // department: string;
    department: "Programmer" //value => type : literal types
    firstName: string;
    middleName?: string;  //Optional type
    readonly lastName: string; //now the value of lastName can not be changed in future.
    isActive: boolean;
} = {
    department: "Programmer",
    firstName: 'Devjit',
    lastName: 'Roy',
    isActive: true,
}

// we can get access easily the property of the object by .notation. TypeScript will give suggestion when writing dot after the object name
user.firstName = 'Debajit';


// department type is defined as literal types so the value can not be changed now.
user.department = "Developer";
console.log(user);

// Cannot assign to 'lastName' because it is a read-only property.
user.lastName = "Chy";