/**
 * Gear inventory data.
 */
import Item from "./Item.js";

const tent = new Item(
  "item01",
  "Camping Tent",
  "Shelter",
  2000,
  true,
  "../assets/images/tent.svg"
);

const stove = new Item(
  "item02",
  "Portable Stove",
  "Cooking",
  1200,
  false,
  "../assets/images/stove.svg"
);

const itemArray = [tent, stove];

export default itemArray;
