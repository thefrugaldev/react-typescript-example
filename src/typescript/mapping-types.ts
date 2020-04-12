import { TextLayer, ImageLayer } from "./types";

type FieldDescriptions = {
  // Note: generate all the keys that can be found in the TextLayer type and make it a string value
  [key in keyof (TextLayer & ImageLayer)]: string;
};

const fieldDescriptions: FieldDescriptions = {
  // Note: setting the type here requires all props of TextLayer and ImageLayer union
  text: "This is the default text",
  color: "The color of the text",
  fontSize: "The size of the font",
  id: "The unique identify of the layer",
  maxWidth: "The max width of the text layer",
  position: "The position of the top left part of the layer",
  rotation: "The rotation angle of the layer between 0 and 360",
  type: "The type of the layer",
  maxBounds: "The max bounds for the image layer",
  src: "The relative location to the image file",
};

Object.entries(fieldDescriptions).forEach(([field, description]) => {
  console.log(`${field}: ${description}`);
});
