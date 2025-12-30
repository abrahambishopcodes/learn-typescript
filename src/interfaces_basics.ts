
interface User {
    id: number;
    name: string;
    email?: string;
}

const user: User = {
    id: 1,
    name: "Alice",
}

// Extending interfaces

interface Admin extends User {
    permissions: string[];
} // Admin extends User, which means it includes all properties of User plus its own

const admin: Admin = {
    id: 2,
    name: "Bob",
    permissions: ["read", "write", "delete"],
}

interface Metadata {
    tax_no: string;
    address: string;
    phone?: string;
}

interface AdminWithMetadata extends Admin, Metadata {} 
// Multiple interface inheritance
// AdminWithMetadata extends both Admin and Metadata

const adminWithMetadata: AdminWithMetadata = {
    id: 3,
    name: "Charlie",
    permissions: ["read", "write"],
    tax_no: "123-456-789",
    address: "123 Main St",
}

console.log(user);
console.log(admin);
console.log(adminWithMetadata);