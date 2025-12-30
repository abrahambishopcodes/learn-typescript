
function func1 (a: number, b: number): number {
    return a + b;
}

const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2);

// const times2 = (n) => n * 2; // inferred as (n: number) => number

type Point = {x: number, y: number};

const distanceBetweenPoints = (p: Point) : number => {
    return Math.sqrt(p.x ** 2 + p.y ** 2);
}

console.log(distanceBetweenPoints({x: 3, y: 4}));