
const ROLES = ["admin", "user", "guest"] as const; 

type Role = typeof ROLES[number];

const assignRole = (role: Role) => {
    console.log(`Assigned role: ${role}`);
}

assignRole("admin");
