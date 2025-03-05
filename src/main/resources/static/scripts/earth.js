import * as THREE from '../../node_modules/three/build/three.module.js';
import * as Planet from './planetCreator.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){
            let t = 1;
            const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const earth = Planet.createPlanetWithBump(2,64,64,'images/earthmap.jpg','images/earthbump.jpg',0.1);
			scene.add( earth );

            const cloudgeometry = new THREE.SphereGeometry(2.05,64,64);
            const cloudmaterial = new THREE.MeshPhongMaterial({
                map : new THREE.TextureLoader().load('images/earthcloud.png'),
                transparent : true,
            });
            const cloud = new THREE.Mesh( cloudgeometry, cloudmaterial);
            scene.add(cloud);

            const stars = Planet.createStars(80,64,64,'images/stars.png');
            scene.add(stars);

            const moon = Planet.createPlanetWithBump(0.5,64,64,'images/moon.jpg','images/moonbump.jpg',0.01);
            scene.add(moon);
            moon.position.set(3,0,0);
            //moon.position.set(earth.position.x-3,earth.position.y-2,earth.position.z-2)

            const ambientLight = new THREE.AmbientLight(0x909090, 1);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff,1);
            pointLight.position.set(50,30,50);
            scene.add(pointLight);

            camera.position.z = 6;
			//camera.position.set(5,3,4);
            
			function animate() {
				requestAnimationFrame( animate );
                t  += 0.01;
                moon.position.z = 3*Math.cos(t);
                moon.position.x = 3*Math.sin(t);
				earth.rotation.y -= 0.0015;
                cloud.rotation.y -= 0.0015;
                stars.rotation.y -= 0.002;
                moon.rotation.y -= 0.003;
				renderer.render( scene, camera );
			};
            const controls = new OrbitControls(camera, renderer.domElement);
			animate();

    }
    init();