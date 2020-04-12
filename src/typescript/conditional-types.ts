import { TextLayer, ImageLayer, LayerType, TextMeta, ImageMeta } from "./types";

const imageLayer: ImageLayer = {
  type: LayerType.Image,
  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: 512 },
};

function setMeta<T extends TextLayer | ImageLayer>( // Note: can't rely on conditional types without using generics
  layer: T,
  meta: T extends TextLayer ? TextMeta : ImageMeta
): void {
  layer.meta = meta;
}

setMeta(imageLayer, {
  format: "png",
  origin: "Download",
});
