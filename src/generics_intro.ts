// A simple generic function that returns the value passed to it
function repeatAfterMe<T>(value: T): T {
    return value;
}

console.log(
    repeatAfterMe("Hello, Generics!")
); // Type inferred as string
console.log(
    repeatAfterMe(2025)
); // Type inferred as number