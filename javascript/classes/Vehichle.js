class Vechicle {
  constructor(modelInput, colorInput, transmissionInput) {
    this.model = modelInput;
    this.color = colorInput;
    this.transmission = transmissionInput;
    this.speed = 0;
  }

  accelerate(speed) {
    // this.speed = this.speed + speed;
    this.speed += speed;
    console.log(`Speeding at ${this.speed}`);
  }

  decelerate(speed) {
    // this.speed = this.speed + speed;
    this.speed -= speed;
    if (this.speed <= 0) {
      console.log(`Engined halted`);
      return;
    }
    console.log(`Speed at ${this.speed}`);
  }
}

const honda = new Vechicle('Model1', 'red', 'manual');
honda.accelerate(10);
honda.accelerate(15);
honda.accelerate(5);

honda.decelerate(10);
honda.decelerate(10);
honda.decelerate(10);
// console.log(honda);
