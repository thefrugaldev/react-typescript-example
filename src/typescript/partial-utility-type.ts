import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";

const projectSize: Size = {
  width: 512,
  height: 250,
};

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

const imageLayer: ImageLayer = {
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width },
};

function setLayerProps<T extends TextLayer | ImageLayer>( // Note: restricts prop keys to only properties of Text or Image layer
  project: Project,
  id: string,
  props: Partial<T>
) {
  const layer = project.layers.find((l) => l.id === id);

  if (layer) {
    Object.entries(props).forEach(([k, v]) => {
      (layer as any)[k] = v;
    });
  }
}

const project: Project = {
  layers: [imageLayer, textLayer],
  size: projectSize,
};

setLayerProps<TextLayer>(project, "10", { text: "hello" });
setLayerProps<ImageLayer>(project, "20", { src: "ps-white.jpg" });
