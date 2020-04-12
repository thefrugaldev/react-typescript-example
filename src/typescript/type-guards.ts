import {
  Project,
  TextLayer,
  ImageLayer,
  LayerType,
  Size,
  Layer,
} from "./types";

const projectSize: Size = {
  width: 512,
  height: 250,
};

const textLayer1 = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px",
};

const textLayer2 = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 240 },
  color: "blue",
  id: "30",
  rotation: 0,
  text: "Is powerful",
  fontSize: "10px",
};

const imageLayer = {
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width },
};

function isTextLayer(layer: Layer): layer is TextLayer {
  // Note: returns an assertion that argument is of a certain type
  return layer.type === LayerType.Text;
}

function isImageLayer(layer: Layer): layer is ImageLayer {
  // Note: returns an assertion that argument is of a certain type
  return layer.type === LayerType.Image;
}

function setFontSize(layer: TextLayer, value: string | number) {
  if (typeof value === "number") {
    layer.fontSize = `${value}px`;
  } else {
    layer.fontSize = value;
  }
}

function setFontSizeOnSelection(layers: Layer[], value: string | number) {
  layers.forEach((layer) => {
    if (isTextLayer(layer)) setFontSize(layer, value);
  });
}

function setSrc(layer: ImageLayer, value: string) {
  layer.src = value;
}

function setSrcOnSelection(layers: Layer[], value: string) {
  layers.forEach((layer) => {
    if (isImageLayer(layer)) setSrc(layer, value);
  });
}

const project: Project = {
  layers: [imageLayer, textLayer1, textLayer2],
  size: projectSize,
};

setFontSizeOnSelection(project.layers, "20px");
setSrcOnSelection(project.layers, "ps-dark.png");
