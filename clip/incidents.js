import { loadPlugin } from "@donkeyclip/motorcortex";
import threejsDefinition from "@donkeyclip/motorcortex-threejs";
const threejs = loadPlugin(threejsDefinition);

export const city = {
  id: "city",
  model: {
    loader: "GLTFLoader",
    file: "./assets/city/city.glb",
  },
  settings: {
    position: { x: 0, y: 0, z: 0 },
  },
};
export const scrow = {
  id: "scrow",
  model: {
    loader: "GLTFLoader",
    file: "./assets/scrow/scarecrow.glb",
  },
  settings: {
    position: { x: 0, y: 0, z: -7 },
  },
};

export const scrowWalk = new threejs.MorphAnimation(
  {
    attrs: {
      singleLoopDuration: 1000,
      animationName: "Take 001",
    },
    animatedAttrs: {
      time: 25000,
    },
  },
  {
    selector: "!#scrow",
    duration: 25000,
  }
);

export const cityBurn = new threejs.MorphAnimation(
  {
    attrs: {
      singleLoopDuration: 1500,
      animationName: "Default Take",
    },
    animatedAttrs: {
      time: 25000,
    },
  },
  {
    selector: "!#city",
    duration: 25000,
  }
);

const manWalk = (position) => {
  return new threejs.ObjectAnimation(
    {
      animatedAttrs: {
        position,
      },
    },
    {
      selector: "!#scrow",
      duration: 25000,
    }
  );
};
const cameraAnimation = (position) => {
  return new threejs.ObjectAnimation(
    {
      animatedAttrs: {
        position,
        targetEntity: "!#scrow",
      },
    },
    {
      selector: "!#camera_1",
      duration: 25000,
    }
  );
};
export const manWalk1 = manWalk({ x: -4.42, y: 0.43, z: 22.44 });
export const cameraAnimation1 = cameraAnimation({
  x: -4.91,
  y: 1.69,
  z: 31.66,
});
