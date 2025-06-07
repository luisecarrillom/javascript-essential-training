// Laptop class used to create laptop objects
class Laptop {
  constructor(name, brand, ram, storage, isCharged, releaseDate, image) {
    this.name = name;
    this.brand = brand;
    this.ram = ram;
    this.storage = storage;
    this.isCharged = isCharged;
    this.releaseDate = releaseDate;
    this.image = image;
  }

  ageInDays() {
    const now = new Date();
    const release = new Date(this.releaseDate);
    const diff = now - release;
    return Math.floor(diff / (1000 * 3600 * 24));
  }
}

export default Laptop;
