let apples: number = 5;
apples = 10.2;
let food: boolean = true;
food = false;
let speed: string = 'quick';
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'orange'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// classes
class Car {}
let car: Car = new Car();

// Obj Literals
let cardinal: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function dec.
function jakeUp(i) {
  console.log(i);
}

const moveUp = function (i) {
  console.log(i);
};

const moveDown = (i) => {
  console.log(i);
};

const moveFinal: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1. Function that returns the 'any' type

const json = ' {"x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. when we declare a var on one line and
// intializate it later

let words = ['try', 'come', 'run'];
let foundWord: string;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'come') {
    foundWord = 'go';
  }
}

// 3. variable whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
