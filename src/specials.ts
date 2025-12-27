
let title: string = "Legend of Zelda: Ocarina of Time";
// title = undefined;  This will throw an error because title is a string and cannot be assigned undefined.

// To allow a variable to be either a string or undefined, we can use a union type.
let description: string | undefined = "An action-adventure game developed by Nintendo.";
description = undefined; // This is now valid.

const logActivity = (activity: string): void => {
    console.log(`Activity: ${activity}`);
}

logActivity("Playing Ocarina of Time");

const throwError = (message: string): never => {
    throw new Error(message);
} // The never type indicates that this function will not return a value and will always throw an error.

// Uncommenting the following line will throw an error.
// throwError("This is a critical error!");