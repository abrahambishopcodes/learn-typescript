

type User = {
    id: number,
    username: string,
    email?: string, // question mark makes email optional
    isActive: boolean,
    readonly createdAt: Date // readonly makes createdAt immutable
}

const user1: User = {
    id: 1,
    username: "abrahambishopcodes",
    isActive: true,
    createdAt: new Date("2024-06-01")
}

// user1.createdAt = new Date(); // Error: Cannot assign to 'createdAt' because it is a read-only property

console.log("New user created:", user1);

const socialStats : Record<"facebook" | "twitter" | "instagram", number> = {
    facebook: 1200,
    twitter: 800,
    instagram: 1500,
    // linkedin: 500 // Error: Object literal may only specify known properties, and 'linkedin' does not exist in type 'Record<"facebook" | "twitter" | "instagram", number>'.
}

console.log("Social Stats:", socialStats);