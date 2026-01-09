
// Interfaces supports declaration merging while types do not

interface User {
    name: string,
    email: string
}

interface User {
    isActive: boolean,
    createdAt: Date,
}

// the interfaces properties are now merged into one

const user: User = {
    name: "Michael",
    email: "bigMike102@gmail.com",
    isActive: true,
    createdAt: new Date("2024-03-10")
}

// types 

type Product = {
    id: number,
    price: number,
    title: string
}

// type Product = {
//     id: number,
//     price: number,
//     title: string,
// } // typescript will mark this as a duplicate identifer issue

// types do not support declaration merging

// what types can do but interfaces cannot
type OrderStatus = "pending" | "shipped" | "delivered" | "returned"

type ID = number | string

type Point = [number, number] // tuple type

type User2 = {
    id: ID,
    name: string,
    status: OrderStatus
}

type ReadOnlyUser = Readonly<User2>