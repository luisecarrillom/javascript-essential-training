/**
 * File: object-properties-camera.js
 * Description: Create a Camera object and access its properties
 */

// Create a Camera object
const camera = {
    brand: "Canon",
    model: "EOS R10",
    resolution: "24.2MP",
    hasVideo: true,
    lens: {
      type: "Zoom",
      focalLength: "18-150mm",
    },
  
    // Method to change the lens
    changeLens: function (newType, newFocalLength) {
      this.lens.type = newType;
      this.lens.focalLength = newFocalLength;
    },
  
    // Method to toggle video function
    toggleVideo: function (status) {
      this.hasVideo = status;
    },
  };
  
  // Access and log some properties
  console.log("Camera brand:", camera.brand);
  console.log("Resolution:", camera.resolution);
  console.log("Lens type:", camera.lens.type);
  
  // Use methods to change properties
  camera.changeLens("Prime", "50mm");
  camera.toggleVideo(false);
  
  console.log("Updated lens type:", camera.lens.type);
  console.log("Video feature enabled?", camera.hasVideo);
  