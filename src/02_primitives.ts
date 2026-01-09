
let username: string = "abrahambishopcodes";
let noOfCars: number = 5;
let isLoggedIn: boolean = true;

const bigNumber: bigint = 9007199254741991n;

// let sum = bigNumber + noOfCars;  This will throw an error due to type mismatch trying to add bigint and number which are different types.

const TOKEN: unique symbol = Symbol('tokenValue');

function yearsToDays(years: number): number {
    return years * 365;
}

console.log(username.toUpperCase());
// const days = yearsToDays('3') This will throw an error because '3' is a string and the function expects a number.