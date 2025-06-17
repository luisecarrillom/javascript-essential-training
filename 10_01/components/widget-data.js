import Widget from "./Widget.js";

const light = new Widget("w001", "Smart Light", "lighting", "active");
const sensor = new Widget("w002", "Motion Sensor", "security", "inactive");

const widgetArray = [light, sensor];

export default widgetArray;
