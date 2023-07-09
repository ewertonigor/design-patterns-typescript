import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = [
  'Ewerton',
  'Evellyn',
  'Heitor',
  'Igor',
  'João',
  'Rafael',
  'Emanuela',
  'Alison',
  'Emerson',
];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = CarFactory.pickUp(name, `NOVO CARRO ${randomNumbers(100)}`);
  console.log('----');
}
