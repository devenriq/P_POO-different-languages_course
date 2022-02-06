import { UberX } from "./UberX";

const car = new Car("AW46", new Account("Andrés Herrera", "QWERTY"), 4);
car.passenger = 4;
car.printDataCar();

const uberX = new UberX(
  "AW462",
  new Account("Melissa Amado", "i1039"),
  "Chevrolet",
  "Spark"
);
uberX.passenger = 4;
uberX.printDataCar();
