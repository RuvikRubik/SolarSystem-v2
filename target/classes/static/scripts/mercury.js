import * as THREE from '../../node_modules/three/build/three.module.js';
import * as Planet from './planetCreator.js';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let mercury,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );




    mercury = Planet.createPlanetWithBump(2,64,64,'images/mercurymap.jpg','images/mercurybump.jpg',0.01);

    scene.add(mercury,camera);
    mercury.position.y = 0;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,4);

    const stars = Planet.createStars(80,64,64,'images/stars.png');
    scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0xffffff,0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff,1);
    pointLight.position.set(5,3,5);
    scene.add(pointLight);

    function animate() {
        requestAnimationFrame( animate );
        mercury.rotation.y -= 0.005;
        stars.rotation.y -= 0.002;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();