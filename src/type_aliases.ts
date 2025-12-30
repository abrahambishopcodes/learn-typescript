
type Person = {
    id: number;
    age: number;
    address: string;
}

type Status = "success" | "failed" | "pending"

const grantAccess = (s: Status) : string => {
    switch (s) {
        case "success":
            return "You have been granted access."
        case "failed":
            return "Your request for higher order access has been denied."
        case "pending":
           return "Your request is still pending, check again in a few hours."
        default:
            return "The status passed in cannot be found"
    }
}

console.log(grantAccess("pending"))

type Price = { price: number }
type OtherInfo = { id: number, desc: string }

type Product = Price & OtherInfo

const product: Product = {
    price: 2321,
    id: 2,
    desc: "A bluetooth speaker with high bass"
}