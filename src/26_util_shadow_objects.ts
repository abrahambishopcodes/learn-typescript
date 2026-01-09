

// Partial
// Required
// Pick
// Omit
// Readonly
// Record

type User = {
    id: number;
    username: string;
    email?: string;
    address: {
        state: string;
        city: string;
    }
}

// Partial<T> constructs a type with all properties of T set to optional
const OptionalUser: Partial<User> = {
    id: 1,
} // Makes all properties optional

const RequiredUser: Required<User> = {
    id: 1,
    username: "Emily",
    email: "emily@example.com",
    address: {
        state: "NY",
        city: "New York"
    }
} // Makes all properties required

// Pick<T, K> allows you to pick a set of properties K from T
const idAndEmailUser: Pick<User, "id" | "email"> = {
    id: 2,
    email: "jane@example.com"   
} // Only id and email properties

type RegisterdUser = {
    id: number;
    email: string;
    password: string;
}

const user2: RegisterdUser = {
    id: 3,
    email: "random@xyz.com",
    password: "23ihfdhfar9u43.edkwnfa9995323gjw" // hashed password
} 

const getUserInfo = (user: RegisterdUser): Omit<RegisterdUser, "password"> => {
    const { password, ...userInfo } = user;
    return userInfo;
}

getUserInfo(user2); // Returns { id: 3, email: "random@xyz.com" }, No password