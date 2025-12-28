

const printId = (id: number | string) => {
    if (typeof id === 'string' ){
        console.log(`ID: ${id.toUpperCase()}`);
    } else {
        console.log(`ID: ${id.toFixed(2)}`);
    }
}

printId("abc123");
printId(456);

// object union

type Admin = {
    role: "admin",
    privileges: string[];
}

type Customer = {
    role: "customer",
    purchaseHistory: number[];
}

const describeUser = (user: Admin | Customer) => {
    if (user.role === "admin") {
        console.log(`Privileges: ${user.privileges.join(", ")}`); // TypeScript knows user is Admin here because of the role check
    } else {
        console.log(`Purchase History: ${user.purchaseHistory.join(", ")}`); // defaults to Customer
    }
}

const user: Admin = {
    role: "admin",
    privileges: ["manage-users", "edit-settings"]
}

describeUser(user);

// Alternative using 'in' operator

const describeUserIn = (user: Admin | Customer) => {
    if ('privileges' in user) {
        console.log(`Privileges: ${user.privileges.join(", ")}`);
    } else {
        console.log(`Purchase History: ${user.purchaseHistory.join(", ")}`);
    }
}

describeUserIn(user);

// arrays of unions and unions of arrays

const mixedArray: (number | string)[] = [1, "two", 3, "four"];

const unionOfArrays: number[] | string[] = [1, 2, 3, 4]; // could also be ["one", "two"]