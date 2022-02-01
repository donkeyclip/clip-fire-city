import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { initParamsValidationRules, initParams } from "./initParams";
import threejsDefinition from "@donkeyclip/motorcortex-threejs";
const threejs = loadPlugin(threejsDefinition);
import {
  city,
  cityBurn,
  scrow,
  scrowWalk,
  manWalk1,
  cameraAnimation1,
} from "./incidents";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[1].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
});

const threeClip = new threejs.Clip(
  {
    renderers: {
      parameters: [],
      settings: {
        setClearColor: ["#010101"],
      },
    },
    scenes: {
      fog: ["#010101", 0, 100],
    },
    lights: [
      {
        type: "HemisphereLight",
        parameters: ["#fff", "#fff", 0.1],
      },
    ],
    cameras: [
      {
        id: "camera_1",
        type: "PerspectiveCamera",
        parameters: [45, 1920 / 1080, 0.01, 1000],
        settings: {
          position: { x: 85, y: 10, z: 2 },
          far: 10000000,
          near: 1,
        },
      },
    ],
    entities: [
      city,
      scrow,
      // {
      //   geometry: { type: "PlaneBufferGeometry", parameters: [200, 200, 1] },
      //   material: {
      //     type: "MeshBasicMaterial",
      //     parameters: [
      //       {
      //         color: "#010101",
      //         textureMap: "./assets/snow-texture.jpg",
      //       },
      //     ],
      //   },
      //   settings: {
      //     position: { set: [0, 0, 0] },
      //     rotation: { set: [-Math.PI / 2, 0, 0] },
      //   },
      // },
      {
        geometry: { type: "SphereBufferGeometry", parameters: [200, 32, 16] },
        material: {
          type: "MeshBasicMaterial",
          parameters: [
            {
              color: "#fff",
              textureMap: "./assets/skybox.jpg",
              side: "DoubleSide",
            },
          ],
        },
        settings: {
          position: { set: [0, 0, 0] },
          rotation: { set: [0, -Math.PI / 2, 0] },
        },
      },
    ],
    controls: { maxDistance: 50000, enable: true, enableEvents: true },
  },
  {
    selector: ".container",
    containerParams: {
      width: "1920px",
      height: "1080px",
    },
  }
);

threeClip.addIncident(scrowWalk, 0);
threeClip.addIncident(manWalk1, 0);
threeClip.addIncident(cityBurn, 0);
threeClip.addIncident(cameraAnimation1, 0);
clip.addIncident(threeClip, 0);
window.clip = threeClip;
