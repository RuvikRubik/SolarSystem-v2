import * as THREE from '../../node_modules/three/build/three.module.js';
import * as Planet from './planetCreator.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let sun,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(8,32,32);
    const textura = new THREE.TextureLoader().load("images/sunmap.jpg");
    //const normaltex = new THREE.TextureLoader().load("images/sunbump.jpg")
    const material = new THREE.MeshBasicMaterial( { map: textura } );
    sun = new THREE.Mesh( geometry, material );

    scene.add(sun,camera);
    sun.position.y = 0;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,17);

    const stars = Planet.createStars(80,64,64,'images/stars.png');
    scene.add(stars);

    function animate() {
        requestAnimationFrame( animate );
        sun.rotation.y -= 0.002;
        stars.rotation.y -= 0.002;
        renderer.render( scene, camera );
    }
    animate();

    controls = new OrbitControls(camera, renderer.domElement);

    }
    init();