import { MainDishBuilder } from '../../creational/builder/class/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/class/vegan-dish-builder';

export class BuilderFacade {
  /* Essa é a fachada para a pasta do src/creational/builder/index.ts */
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBererage().getMeal();
    console.log(meal2);
  }

  makeMeal3(): void {
    const meal3 = this.veganDishBuilder.makeMeal().getMeal();
    console.log(meal3);
    console.log(meal3.getPrice());
  }
}
