/**
 * Demo: Returning values from functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */

// Helper function: converts Celsius to Fahrenheit
const convertToFahrenheit = (celsius) => {
  // Return the converted value
  return (celsius * 9/5) + 32;
};

// Helper function: formats number to specified locale and currency
const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

// Main function: calculates total price including tax
const calculateTotalWithTax = (price, taxRate) => {
  const taxAmount = price * (taxRate / 100);
  const total = price + taxAmount;
  return total;
};

// --- Usage ---
const price = 50;
const taxRate = 12;

const total = calculateTotalWithTax(price, taxRate);
const formattedTotal = formatCurrency(total, "en-CA", "CAD");

console.log("Total with tax (CAD):", formattedTotal);

const degreesC = 20;
const degreesF = convertToFahrenheit(degreesC);
console.log(`${degreesC}°C is equal to ${degreesF}°F`);
