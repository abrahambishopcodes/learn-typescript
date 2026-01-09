
const jsonUserString = `
{
    "id": 1,
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com"
  }`

  const parsedUser = JSON.parse(jsonUserString) as {
    id: number,
    name: string,
    age: number,
    email: string
  }

//   console.log(parsedUser.nickname); // Gives error because nickname does not exist on the parsedUser type

const mockUser = {
    id: 2,
    name: "Bob",
    age: 25,
    email: "bob@example.com"
}

const validateUser = (user: unknown): user is typeof mockUser => {
    return (
        typeof user === "object" && typeof user !== null && typeof (user as any).id === "number" &&
        typeof (user as any).name === "string" && typeof (user as any).age === "number" &&
        typeof (user as any).email === "string"
    )
}
