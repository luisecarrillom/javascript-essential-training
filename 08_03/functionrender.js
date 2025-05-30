/**
 * Rendering an object using a function expression
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Object with product data
const product = {
  title: "Wireless Mouse",
  brand: "LogiTech",
  price: 29.99,
  stock: 12,
};

// Function that creates a new article element based on a product
const renderProduct = function (item) {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2>${item.title}</h2>
    <ul>
      <li>Brand: ${item.brand}</li>
      <li>Price: $${item.price}</li>
      <li>Available stock: ${item.stock}</li>
    </ul>
  `;
  return article;
};

// Append the returned element to the <main>
const main = document.querySelector("main");
main.append(renderProduct(product));

// Also store the result in a variable and log it
const productCard = renderProduct(product);
console.log("Rendered element:", productCard);
