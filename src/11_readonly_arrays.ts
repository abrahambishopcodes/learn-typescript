
const mutableNumbers: number[] = [1, 2, 3, 4, 5];
const numbers: readonly number[] = [1, 2, 3, 4, 5];
//  can also be written as:
const moreNumbers: ReadonlyArray<number> = [6, 7, 8, 9, 10];

mutableNumbers[0] = 10; // OK
// numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.

const sum = ( arr: readonly number[] ): number => {
    return arr.reduce( (acc, val) => acc + val, 0 );
}

console.log(`Sum of numbers: ${sum(numbers)}`);