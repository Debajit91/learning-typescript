// JS - TS
// string, number, boolean, undefined, null

// TS: never, unknown, void, any
// never = when a function never finishes normally always throws or loops forever
// void = when a function return undefined or return nothing or does not return a real value 

let userName: string = "Debajit544";

userName = "Debajit";

let userId: number = 123;

let isAdmin: boolean = false;
isAdmin = true;


/** When the value not declared its type will be implicitly type 'any' until explicitly type declaration. Typescript will infer it. */
let x = undefined;
x = 5;
x = "five";

let y: undefined = undefined;
// y = 5; it giving error as type declared undefined




