import { animalList } from "./animals.js";

function createAnimalMenu() {
  // Create <ul> and fill it with the animal list
  const ul = document.createElement("ul");
  ul.innerHTML = animalList;

  // Create <nav> and give it a class
  const nav = document.createElement("nav");
  nav.classList.add("main-navigation");

  // Add <ul> into <nav>
  nav.append(ul);

  // Append <nav> into the existing header
  const header = document.querySelector(".siteheader");
  header.append(nav);
}

// Run the function
createAnimalMenu();
