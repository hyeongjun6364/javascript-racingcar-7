import { readUserInput } from './util/missionUtil.js';
import { START_MESSAGE } from './util/constant.js';
import Car from './Car.js';

class Race {
  #cars;
  #tryNumber;

  async handleCar() {
    const cars = await readUserInput(START_MESSAGE.CAR_NAME_INPUT);
    const carsArray = cars.split(',').map((car) => car.trim());
    this.setCarNames(carsArray);
  }

  async handleTryNumber() {
    const tryNumber = await readUserInput(START_MESSAGE.TRY_NUMBER_INPUT);
    this.setTryNumber(tryNumber);
  }

  setTryNumber(number) {
    this.tryNumber = number;
  }

  setCarNames(cars) {
    this.#cars = cars.map((carName) => new Car(carName));
  }
}

export default Race;