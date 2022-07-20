interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

// function for summary
function printSummary(item: Reportable): void {
  console.log(item.summary());
}

printVehicle(oldCivic);
printSummary(oldCivic);

printSummary(drink);
// oldCivic can be passed into both because the condition of the interface are met.
