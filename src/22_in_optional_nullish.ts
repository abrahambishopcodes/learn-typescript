
type Client = {
    name: string;
    role: string;
    twitter_handle: string;
}

type Admin = {
    name: string;
    role: string;
    access_level: number;
}

type User = Client | Admin;

function getUserRole(user: User): string {
    if ("access_level" in user) {
        return `User is admin with access level ${user.access_level}`;
    }

    return `User is client with twitter handle ${user.twitter_handle}`
}