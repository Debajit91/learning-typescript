//  ? : ternary operator : decision making
// ?? : nullish coalescing operator
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