import * as THREE from '../../node_modules/three/build/three.module.js';
import * as Planet from './planetCreator.js';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let planeta,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
    planeta = Planet.createPlanet(9,32,32,"images/saturnmap.jpg","Phong");
    const saturnring = Planet.createRing(12, 2, 2, 100,"images/saturnringcolor.jpg",0.7);

    scene.add(planeta,camera,saturnring);
    planeta.position.y = 0;
    saturnring.position.y = 0;
    saturnring.rotation.x = 1.6;
    camera.position.set(0,2,18);
    camera.lookAt(planeta.position);

    const stars = Planet.createStars(80,64,64,'images/stars.png');
    scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0xffffff,0.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff,1);
    pointLight.position.set(5,6,15);
    scene.add(pointLight);

    function animate() {
        requestAnimationFrame( animate );
        planeta.rotation.y -= 0.002;
        saturnring.rotation.z += 0.002;
        stars.rotation.y -= 0.002;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();