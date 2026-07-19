import * as THREE from 'three';

import {OrbitControls} from
'three/addons/controls/OrbitControls.js';

const scene=new THREE.Scene();

scene.background=new THREE.Color(0x06111f);

const camera=new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
100
);

camera.position.set(5,5,10);

const renderer=new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const controls=new OrbitControls(camera,renderer.domElement);

controls.enableDamping=true;
