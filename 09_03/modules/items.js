import Item from "./Item.js";

const lamp = new Item(
  "item01",
  "Camping Lamp",
  "Lighting",
  800,
  "Good",
  "2022-04-10",
  "../assets/images/lamp.svg"
);

const bottle = new Item(
  "item02",
  "Water Bottle",
  "Hydration",
  1300,
  "Used",
  "2020-08-22",
  "../assets/images/bottle.svg"
);

const itemArray = [lamp, bottle];

export default itemArray;
