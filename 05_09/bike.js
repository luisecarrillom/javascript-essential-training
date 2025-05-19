class Bike {
    constructor(name, type, color, gearCount, image) {
      this.name = name;
      this.type = type;
      this.color = color;
      this.gearCount = gearCount;
      this.image = image;
    }
  
    bikeInfo() {
      return `${this.name} is a ${this.type} bike with ${this.gearCount} gears.`;
    }
  }
  
  export default Bike;
  