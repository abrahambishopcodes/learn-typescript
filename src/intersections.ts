
type Inter1 = {
    id: string
}

type Inter2 = {
    description: string
}

type Intersected = Inter1 & Inter2; // Type with properties of both Inter1 and Inter2

const printIntersected = (obj: Intersected): void => { // obj must have both id and description
    console.log(`ID: ${obj.id}, Description: ${obj.description}`);
}

printIntersected({
    id: "123efd",
    description: "A sample description"
})

//

type prop1 = {
    username: string
}

type prop2 = {
    email: string
}

type User = prop1 & prop2; // User must have both username and email

const printUser = (user: User): void => {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
}

printUser({
    username: "john_doe",
    email: "john@example.com"
})

// intersection of more complex types

type AdminDetails = {
    accessLevel: number,
    permissions: string[]
}

type EmployeeDetails = {
    employeeId: string,
    department: string
}

const AdminEmployee: AdminDetails & EmployeeDetails ={
    accessLevel: 5,
    permissions: ["read", "write", "execute"],
    employeeId: "E12345",
    department: "IT"
}

console.log(AdminEmployee);