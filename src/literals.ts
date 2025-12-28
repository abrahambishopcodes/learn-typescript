
type Direction = "right" | "down" | "up" | "left";

const move = (direction: Direction) => {
    console.log(`Moving ${direction}`);
}

move("right");

const d1 = "left"
move(d1);

let d2 = "left";
// move(d2); // Error: Argument of type 'string' is not assignable to parameter of type 'Direction',
//  because d2 is inferred as string which can be any string, not the specific literal "left"

let d3 : Direction = "left";
move(d3);

const directions: Direction[] = ["right", "down", "up", "left"];
//  directions.push("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'

console.log("Directions array:", directions);