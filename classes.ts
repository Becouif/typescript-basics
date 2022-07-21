class Vehicle {
  protected drive(): void {
    console.log('Moving!!!');
  }
  // to accept argument in the class you need a constructor like below

  constructor(public color: string) {}
  honk(): void {
    console.log('Beep');
  }
}

// EXTENDS
// if you have 2 classes with similar functions e.g
// class Car should have same props as class Vehicle then you can do this
// 'extends' works like copy and paste
//  note: extend can be overwritten in the child class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  move(): void {
    console.log('Chugga Chugga');
    this.drive();
  }
}

class Motorcycle {
  private zoom(): void {
    console.log('vroom');
  }
  startRiding(): void {
    this.zoom();
  }
}

const vehicle = new Vehicle('Lime');
console.log(vehicle.color);

const car = new Car(4, 'yellow');
const motorcycle = new Motorcycle();
car.move();
car.honk();
motorcycle.startRiding();

// differences between ES15 and types in typescript
// MODIFIERS
//  =PUBLIC method can be called anywhere, any time
//  = private: method can only be called by other methods in this class
//  protected: method can be called by other methods in this class, or by other methods in child classes
