// Function
// arrow function, normal function

// type declaration - normal
function addNormal(num1: number, num2:number):number{
    return num1 + num2
}
addNormal(2, 2);

// type declaration - arrow
const addArrow = (num1:number, num2:number):number=>{
    return num1 + num2;
}
addArrow(2, 2);

// object => function => method
const user = {
    name: "Deb",
    balance: 0,
    addBalance(value: number):number{
       return this.balance + value;
    },
};
user.addBalance(1000);


// call back
const arr: number[] = [1, 4, 6];
const sqrArray = arr.map((elem:number):number => elem * elem);
