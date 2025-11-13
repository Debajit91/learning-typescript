// nullable types

const getUser = (input:string | null) =>{
    if(input){
        console.log(`From DB: ${input}`)
    } else console.log("From DB: All User")
}

// getUser(null);



// unknown
// should use 'type of'

const discountCalc = (price: unknown) =>{
    if(typeof price === 'number'){
        const discount = price * 0.1;
        const discountedPrice = price - discount;
        console.log(discountedPrice);
    } else if (typeof price === 'string'){
        const [amount] = price.split(" ");
        const discount = Number(amount) * 0.1;
        const discountedPrice = Number(amount) - discount;
        console.log(discountedPrice);
    } else console.log('Wrong Input')
}

discountCalc(100);
discountCalc('100 Tk');
discountCalc(null);


// void : return nothing


// never: the function that will finish executing or only throw an error

const loopFunction = () =>{
    while (true){
        console.log('loop')
    }
}

console.log(loopFunction())

const throwError = (msg:string) =>{
    throw new Error(msg);
}

console.log(throwError("Error..."));