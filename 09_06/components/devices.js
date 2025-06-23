/**
 * Sample list of gadgets 
 */
import Gadget from "./Gadget.js";

const tablet = new Gadget("gadget01", "Tablet Pro", "Tablet", false);
const speaker = new Gadget("gadget02", "Smart Speaker", "Audio", true);

const deviceArray = [tablet, speaker];

export default deviceArray;
