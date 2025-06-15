/**
 * Item class to represent gear.
 */
class Item {
  constructor(id, name, category, weight, available, image) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.weight = weight;
    this.available = available;
    this.image = image;
  }
}

export default Item;
