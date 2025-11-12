// type allias
// when a type declared by a Name it is called type alliasing. It is used to make type reusable. the name should be start with capital letter
// allias type: general, object, function, union, tuple, generic


// General Allias
type Name = string;
const myName : Name = "Deb";

type ID = number | string;
const id1 : ID = 123;
const id2 : ID = "A-01"


// Object type Allias
type User = {
    id: number;
    name:{
        firstName: string;
        lastName: string;
    },
    gender: 'male' | 'female',
    contactNo: string;
    address:{
        division: string;
        city: string
    }
}


const user1: User = {
    id: 101,
    name:{
        firstName: "Deb",
        lastName: "Roy"
    },
    gender: 'male',
    contactNo: '01783388517',
    address:{
        division: 'Chattogram',
        city: 'Chattogram'
    },
};

const user2: User = {
    id: 102,
    name:{
        firstName: "Pr",
        lastName: "Roy"
    },
    gender: 'female',
    contactNo: '01783388519',
    address:{
        division: 'Chattogram',
        city: 'Chattogram'
    },
};

// Function
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2