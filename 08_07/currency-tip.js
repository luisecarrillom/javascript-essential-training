/**
 * Passing data to functions through parameters.
 * Calculates tip and total with currency and prefix/suffix options.
 */

function tipCalculator(sum, percentage, currency = "$", prefix = true) {
  const tip = sum * (percentage / 100);
  const total = sum + tip;

  const formattedSum = prefix
    ? `${currency}${sum.toFixed(2)}`
    : `${sum.toFixed(2)}${currency}`;

  const formattedTip = prefix
    ? `${currency}${tip.toFixed(2)}`
    : `${tip.toFixed(2)}${currency}`;

  const formattedTotal = prefix
    ? `${currency}${total.toFixed(2)}`
    : `${total.toFixed(2)}${currency}`;

  const message = `
    Sum before tip: ${formattedSum}
    Tip percentage: ${percentage}%
    Tip:            ${formattedTip}
    Total:          ${formattedTotal}
  `;

  const main = document.querySelector("main");
  const article = document.createElement("article");
  article.innerText = message;
  main.append(article);
}

// Example 1: US dollars, prefix
tipCalculator(29.95, 18, "$", true);

// Example 2: Norwegian kroner, suffix
tipCalculator(300, 15, " kr", false);
