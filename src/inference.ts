const scores: number[] = [10, 32, 12, 32, 54]

scores.map((score) => {
    console.log(score * 2)
    return score * 2;
});

// Function to calculate simple interest
const calculateSimpleInterest = (p: number, r:number, t:number): number => {
    return (p * r * t) / 100;
}

const interest = calculateSimpleInterest(1000, 5, 2);
console.log('Simple Interest:', interest); 

let fourCharPass: string | number;
const username: string = "john_doe";

fourCharPass = username === "admin" ? 1234 : "user";