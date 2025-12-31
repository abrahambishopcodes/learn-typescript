
type User = {
    id: string;
    name: string;
    email?: string;
}

const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' };

function getUser<T, K extends keyof T>(users: T, key: K): T[K] {
    return users[key];
}

const username = getUser(user, "name");
console.log(username); // Output: Alice

// const username2 = getUser(user, "phone") // This will give an error because 'phone' is not a key of User type

function updateUser<T, K extends keyof T>(user: T, key: K, value: T[K]): void {
    user[key] = value;
}

updateUser(user, "id", "2");
// updateUser(user, "id", 3) // This will give an error because the value type does not match the property type

updateUser(user, "name", "Bob");
console.log(user); // Output: { id: '2', name: 'Bob', email: 'alice@example.com' }