import { TextLayer, ImageLayer, LayerType, TextMeta, ImageMeta } from "./types";

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px",
};

function setMeta(layer: ImageLayer, meta: ImageMeta): void; //Note: when dealing with overloads you have to specify return type
function setMeta(layer: TextLayer, meta: TextMeta): void;
function setMeta(layer: ImageLayer | TextLayer, meta: ImageMeta | TextMeta) {
  layer.meta = meta;
}

setMeta(textLayer, {
  fontFoundry: "OS stock",
  licenseExpiration: new Date(2020, 1, 1),
});
