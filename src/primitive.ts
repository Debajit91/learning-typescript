// JS - TS
// string, number, boolean, undefined, null

// TS: never, unknown, void, any

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




