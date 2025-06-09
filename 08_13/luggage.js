class Luggage {
  constructor(owner, size, weight, dateTagged) {
    this.owner = owner;
    this.size = size; // in liters
    this.weight = weight; // in kg
    this.dateTagged = dateTagged;
  }

  getStorageTime() {
    const now = new Date();
    const taggedDate = new Date(this.dateTagged);
    const diff = now - taggedDate;
    return Math.floor(diff / (1000 * 60 * 60 * 24)); // days
  }
}

export default Luggage;
