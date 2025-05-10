// Define a Laptop class
class Laptop {
    constructor(brand, model, ram, storage, purchasedDate) {
      this.brand = brand; // Laptop brand
      this.model = model; // Laptop model
      this.ram = ram; // RAM size in GB
      this.storage = storage; // Storage size in GB
      this.purchasedDate = purchasedDate; // Date the laptop was bought
    }
  
    // Method to calculate how many days ago the laptop was purchased
    getAgeInDays() {
      const today = new Date(); // Current date
      const purchased = new Date(this.purchasedDate); // Convert string to Date
      const difference = today - purchased; // Difference in milliseconds
      return Math.floor(difference / (1000 * 60 * 60 * 24)); // Convert to days
    }
  }
  
  export default Laptop;
  