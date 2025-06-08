class Bag {
  constructor(name, volume, pockets, dateAcquired) {
    this.name = name;
    this.volume = volume;
    this.pockets = pockets;
    this.dateAcquired = dateAcquired;
  }

  getAgeInDays() {
    const now = new Date();
    const acquired = new Date(this.dateAcquired);
    const diff = now - acquired;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}

export default Bag;
