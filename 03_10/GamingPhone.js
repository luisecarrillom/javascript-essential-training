// File: GamingPhone.js

// Import base Smartphone class
import Smartphone from "./Smartphone.js";

// Define subclass for gaming phones
class GamingPhone extends Smartphone {
  constructor(brand, model, ram, storage, battery, coolingSystem, fpsCap) {
    super(brand, model, ram, storage, battery);
    this.coolingSystem = coolingSystem; // e.g., "liquid", "fan"
    this.fpsCap = fpsCap; // max frames per second
  }

  // Method for gaming performance boost
  enableGamingMode() {
    console.log("Gaming mode enabled!");
    console.log(`Using ${this.coolingSystem} cooling.`);
    console.log(`FPS capped at ${this.fpsCap}.`);
  }

  // Override updateSystem with custom behavior
  updateSystem() {
    super.updateSystem();
    console.log("Gaming optimizations also updated.");
  }
}

export default GamingPhone;
