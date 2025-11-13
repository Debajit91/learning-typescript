//  ? : ternary operator : decision making
// ?? : nullish coalescing operator : null / undefined
// ?. : optional chaining


// ternary operator

const isEligible = (age:number) =>{
    // if(age >=21){
    //     console.log("You are Eligible")
    // }
    // else console.log("You are not Eligible")

    const result = age >= 21 ? "You are Eligible" : "You are not Eligible"

    return result;
}

console.log(isEligible(20));


// nullish coalescing

const  user = null;

const selectUser = user ?? "No User";

console.log(selectUser);



// optional chaining

const user1:{
    address:{
    district: string;
    city: string;
    postalCode?: string; //optional type
    };
} = {
    address:{
    district: "Dhaka",
    city: "Banani",
    }
}

const postalCode = user1?.address?.postalCode; //optional chaining

console.log(postalCode);