//  function with annotations
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

//  return you must be use if received value annotations
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// using void means you are not expecting a return at all

const throwError = (message: string): never => {
  throw new Error(message);
};

// when we use never we will executes the function completely, more like we throw error and exit the function without giving a value

const error = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const newErr = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todayWeather = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
