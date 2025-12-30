
const doubleNumber = (num: number) => num * 2;

// explicit return for exported function
// export const sayHi = (name: string): string => {
//     return `Hi, ${name}!`;
// }

function booleanToNumber (flag: boolean): number {
    if (flag) {
        return 1;
    }
    return 0;
}

console.log(booleanToNumber(true));  // Output: 1
console.log(booleanToNumber(false)); // Output: 0

async function loadCount () {
    return 12;
}

loadCount().then(count => console.log(`Loaded count: ${count}`)); // Output: Loaded count: 12