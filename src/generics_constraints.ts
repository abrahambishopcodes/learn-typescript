
// Constraint T so that only certain types are allowed based on the properties they have

function getLength<T extends { length: number}>(arg: T): number {
    return arg.length;
};

getLength("Hello"); // Valid, string has length property
getLength([1, 2, 3, 4]); // Valid, array has length property
// getLength(42); // Error: number doesn't have length property
// getLength({}); // Error: empty object doesn't have length property
getLength({ length: 10, value: "Test" }); // Valid, object has length property
// getLength({ title: "Hello", id: 5 }); // Error: object doesn't have length property


const objs = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
]

function filterObjectsByProperty<T, K extends keyof T>(items: T[], key: K): Array<T[K]> {
    return items.map(item => item[key])
}

console.log(filterObjectsByProperty(objs, "name")); // Valid, outputs: ["Alice", "Bob", "Charlie"]
console.log(filterObjectsByProperty(objs, "id")); // Valid, outputs: [1, 2, 3]
// console.log(filterObjectsByProperty(objs, "age")); // Error: 'age' is not a key of the object type