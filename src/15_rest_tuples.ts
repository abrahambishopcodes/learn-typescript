
const generateArthProgression = (...args: [start: number, end: number, step?: number]) : number[] => {
    const [start, end, step = 1] = args;
    const progresion: number[] = [];

    for ( let i = start; i <= end; i += step ) {
        progresion.push(i);
    }

    return progresion;
}

console.log(generateArthProgression(1, 10)); // Default step of 1
console.log(generateArthProgression(1, 10, 2)); // Custom step of 2

const draw = (x: number, y: number ) => {
    console.log(`Drawing at coordinates (${x}, ${y})`);
}

const coords = [10, 20] as const;
draw(...coords) ; // Using spread operator with tuple