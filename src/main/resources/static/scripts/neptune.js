import * as THREE from '../../node_modules/three/build/three.module.js';
import * as Planet from './planetCreator.js';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let neptune,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
    neptune = Planet.createPlanet(9,32,32,"images/neptunemap.jpg","Basic");

    scene.add(neptune,camera);
    neptune.position.y = 0;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,17);

    const stars = Planet.createStars(80,64,64,'images/stars.png');
    scene.add(stars);

    function animate() {
        requestAnimationFrame( animate );
        neptune.rotation.y -= 0.005;
        stars.rotation.y -= 0.002;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();