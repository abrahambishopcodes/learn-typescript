
//  In situations where the type of a function parameter is unknown, TypeScript's typeof operator can be used to determine the type at runtime.


const logType = (value: unknown) => {
  if (typeof value === "string") {
    return `String: ${value}`;
  }

  if (typeof value === "number") {
    return `Number: ${value}`;
  }

  if (typeof value === "boolean") {
    return `Boolean: ${value}`;
  }

  if (typeof value === "function") {
    return `Function: ${value()}`;
  }

  if (value === null) {
    return "Null value";
  }

  if (typeof value === "undefined") {
    return "Undefined value";
  }

  if (typeof value === "object") {
    return `Object: ${JSON.stringify(value)}`;
  }

  return "Unknown type";
};

console.log(
  logType(42),
  logType("Hello, TypeScript!"),
  logType(true),
  logType({ name: "Alice", age: 30 }),
  logType(undefined),
  logType(null),
  logType(function () {
    return "I am a function";
  })
);

const checkInfo = (value: unknown) => {
    if (Array.isArray(value)) {
        return `Array with length: ${value.length}`;
    }

    if (value instanceof Date) {
        return `Date: ${value.toISOString()}`;
    }

    if (value instanceof Error) {
        return `Error: ${value.message}`;
    }

    return "Unknown structure";
};


console.log(
    checkInfo([1, 2, 3]),
    checkInfo(new Date("2024-01-01")),
    checkInfo(new Error("Something went wrong"))
)
