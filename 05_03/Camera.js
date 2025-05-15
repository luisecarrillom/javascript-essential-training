// File: Camera.js
// This file defines the Camera class

class Camera {
    constructor(brand, model, resolution, hasFlash, year, image) {
      this.brand = brand;
      this.model = model;
      this.resolution = resolution;
      this.hasFlash = hasFlash;
      this.year = year;
      this.image = image;
    }
  
    // This method returns how old the camera is
    cameraAge() {
      const now = new Date().getFullYear();
      return now - this.year;
    }
  }
  
  export default Camera;
  