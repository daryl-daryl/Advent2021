import * as fs from "fs";

const testInput: number[] = fs
    .readFileSync("test.txt", "utf8")
    .split("\n")
    .filter(Boolean)
    .map((v: string) => parseInt(v));

console.log(testInput)

const day1Input: number[] = fs
    .readFileSync("input.txt", "utf8")
    .split("\n")
    .filter(Boolean)
    .map((v: string) => parseInt(v));


/** day 1 part 1 */
let counter: number = 0;
let depth: number = 0;
for (var elem of day1Input) {
    if (elem > depth) {
        counter++
    }
    depth = elem;
}
console.log(counter-1)


/** day 1 part 2 */
let depthWindow: number = 0;
counter = 0;
for (let i = 0; i < (day1Input.length - 2); i++) {
    const newWindow: number = day1Input[i+2] + day1Input[i+1] + day1Input[i];
    if(i != 0 && newWindow > depthWindow){
        counter++;
    }
    depthWindow = newWindow;
}

console.log(counter)


