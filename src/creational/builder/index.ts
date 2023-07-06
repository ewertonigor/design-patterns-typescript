import { MainDishBuilder } from './class/main-dish-builder';
import { VeganDishBuilder } from './class/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBererage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const meal3 = veganDishBuilder.makeMeal().getMeal();
console.log(meal3);
console.log(meal3.getPrice());
