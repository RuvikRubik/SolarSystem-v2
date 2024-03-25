import * as THREE from '../../node_modules/three/build/three.module.js';
import * as Planet from './planetCreator.js';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let uranus,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
    uranus = Planet.createPlanet(8,32,32,"images/uranusmap.jpg","Phong");
    const uranusring =  Planet.createRing(11, 1.5, 2, 100,"images/uranusringcolour.jpg",0.7);

    const stars = Planet.createStars(80,64,64,'images/stars.png');
    scene.add(stars);

     const ambientLight = new THREE.AmbientLight(0xffffff,0.2);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff,1);
        pointLight.position.set(5,6,15);
        scene.add(pointLight);

    scene.add(uranus,camera,uranusring);
    uranus.position.y = 0;
    uranusring.position.y = 0;
    uranusring.rotation.x = 1.6;
    //camera.position.set(17,0,0);
    camera.position.set(0,3,18);
    camera.lookAt(uranus.position);

    function animate() {
        requestAnimationFrame( animate );
        uranus.rotation.y -= 0.002;
        stars.rotation.y -= 0.002;
        uranusring.rotation.z += 0.002;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();