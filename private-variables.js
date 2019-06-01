class Bike {
  #speed = 0;
  #time = 0;
  accelerate(speed, time) {
    this.#speed = speed;
    this.#time = time;
  }
  getDistance() {
    return this.#speed * this.#time;
  }
}
const testBike = new Bike();
testBike.accelerate(100, 120);
console.log(`Distance travelled ${testBike.getDistance()}`);
console.log(testBike.speed); //Undefined
