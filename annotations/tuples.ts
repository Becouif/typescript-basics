// add types to tuples

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

//  :[string, boolean, number] doesnt work on empty arrays
// this is how to create a tuples with annotations

//  an alternative
// using type alias
type Drink = [string, boolean, number];

const fanta: Drink = ['orange', true, 40];
const tea: Drink = ['clear', false, 0];

const {
  color,
  carbonated,
  sugar,
}: { color: string; carbonated: boolean; sugar: number } = drink;
