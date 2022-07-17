const carMakers = ['ford', 'BMW', 'Toyota'];

// if you want to start an empty array
// avoid type 'any'
const car: string[] = [];

const carsByMake = [['f150'], ['corolla'], ['camero']];

// add type to arrays in array
const cars: string[][] = [];

// TS can do type inference when extracting values from an array
const carOne = carMakers[1];

// Ts can prevent us from adding incompatible values to the array
carMakers.push('100');
// only string can be added to it

// Help with 'map'
// it gives auto complete for values be return in it
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types

const importantDates: (Date | string)[] = [];
importantDates.push('123444');
importantDates.push(new Date());
