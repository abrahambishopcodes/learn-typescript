
const greetPersonOptional= (name?: string) : string => {
    return `Hello, ${name ?? 'Guest'}!`;
}

console.log(greetPersonOptional("Alice")); // Output: Hello, Alice!
console.log(greetPersonOptional()); // Output: Hello, Guest!

const greetPersonDefault = (name: string = "Guest") : string => {
    return `Hello, ${name}!`;
}

console.log(greetPersonDefault("Alice")); // Output: Hello, Alice!
console.log(greetPersonDefault()); // Output: Hello, Guest!

const connect = (host: string, port?: number, secure?: boolean): string => {
    const p = port ?? 80;
    const s = secure ? "https" : "http";
    return `Connecting to ${s}://${host}:${p}`;
}

console.log(connect("localhost")); // Output: Connecting to http://localhost:80
console.log(connect("localhost", 443, true)); // Output: Connecting to https://localhost:443