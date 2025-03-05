import * as THREE from '../../node_modules/three/build/three.module.js';
import * as Planet from './planetCreator.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const stars = Planet.createStars(160,64,64,'images/stars.png');
scene.add(stars);

function lupa(){
    for (let i = 0; i < 5; i++) {
        setInterval(() => {camera.position.y += 1;}, 50);
      }
    
}

const pawel2 = Planet.createBox(4,4,4,"images/pawel.jpg");

const mercury = Planet.createPlanet(1,32,32,"images/mercurymap.jpg","Standard");
const venus = Planet.createPlanet(2,32,32,"images/venusmap.jpg","Standard");
const earth = Planet.createPlanet(2,32,32,"images/earthmap.jpg","Standard");
const moon = Planet.createPlanet(0.5,32,32,"images/moon.jpg","Phong");
const mars = Planet.createPlanet(1,32,32,"images/marsmap.jpg","Standard");
const jupiter = Planet.createPlanet(5,32,32,"images/jupitermap.jpg","Standard");
const saturn = Planet.createPlanet(4,32,32,"images/saturnmap.jpg","Standard");
const uranus = Planet.createPlanet(3,32,32,"images/uranusmap.jpg","Standard");
const neptune = Planet.createPlanet(3,32,32,"images/neptunemap.jpg","Standard");
const pluto = Planet.createPlanet(2,32,32,"images/plutomap.jpg","Standard");

const saturnring = Planet.createRing(6, 1.5, 2, 100,"images/saturnringcolor.jpg",0.7)
const uranusring = Planet.createRing(5, 1, 2, 100,"images/uranusringcolour.jpg",0.7)

const sun = Planet.createSun(7,32,32,"images/sunmap.jpg","images/sunbump.jpg");

sun.userData.parent = "sun";
earth.userData.parent = "earth";
mercury.userData.parent = "mercury";
venus.userData.parent = "venus";
mars.userData.parent = "mars";
jupiter.userData.parent = "jupiter";
saturn.userData.parent = "saturn";
uranus.userData.parent = "uranus";
neptune.userData.parent = "neptune";
pluto.userData.parent = "pluton";
moon.userData.parent = "moon";



const light = new THREE.PointLight(0xffffff, 1000, 1000);
light.position.set(0, 0, 0);

scene.add(light);

scene.add(venus,mercury,earth,mars,sun,pawel2,neptune,uranus,uranusring,jupiter,saturn,saturnring,pluto,moon);




saturnring.rotation.x = 1.6;
uranusring.rotation.x = 1.6;


camera.position.set(0,50,0);

var t=0,t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0;

const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
    earth.rotation.y += 0.01;
    moon.rotation.y += 0.01;
    sun.rotation.y += 0.01;
    mars.rotation.y += 0.01;
    venus.rotation.y += 0.01;
    mercury.rotation.y += 0.01;
    jupiter.rotation.y += 0.01;
    saturn.rotation.y += 0.01;
    uranus.rotation.y += 0.01;
    neptune.rotation.y += 0.01;
    saturnring.rotation.z += 0.01;
    uranusring.rotation.z += 0.01;
    pluto.rotation.z += 0.01;
    renderer.render( scene, camera );

}

function rotate(){
    requestAnimationFrame( rotate );
    t  += 0.001, t1 += 0.0011, t2 += 0.0015, t3 += 0.0014, t4 += 0.0016, t5 += 0.0017, t6 += 0.0018, t7 += 0.0019, t8 += 0.019;;
    mercury.position.x = 10*Math.cos(t5);
    mercury.position.z = 10*Math.sin(t5);

    venus.position.x = 20*Math.cos(t2);
    venus.position.z = 20*Math.sin(t2);

    earth.position.x = 30*Math.cos(t7);
    earth.position.z = 30*Math.sin(t7);

     moon.position.x = earth.position.x+Math.cos(t8)*3;
     moon.position.z = earth.position.z+Math.sin(t8)*3;
    
    mars.position.x = 40*Math.cos(t6);
    mars.position.z = 40*Math.sin(t6);

    jupiter.position.x = 50*Math.cos(t1);
    jupiter.position.z = 50*Math.sin(t1);

    saturn.position.x = 65*Math.cos(t4);
    saturn.position.z = 65*Math.sin(t4);
    saturnring.position.x = saturn.position.x;
    saturnring.position.z = saturn.position.z;

    uranus.position.x = 80*Math.cos(t3);
    uranus.position.z = 80*Math.sin(t3);
    uranusring.position.x = uranus.position.x;
    uranusring.position.z = uranus.position.z;

    neptune.position.x = 90*Math.cos(t);
    neptune.position.z = 90*Math.sin(t);

    pluto.position.x = 100*Math.cos(t);
    pluto.position.z = 100*Math.sin(t);
    renderer.render( scene, camera );
}
function PickPlanet() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
        switch(intersects[0].object.userData.parent){
            case "mercury":           
                location.href = "mercury.html";
                break;
            case "venus":
                location.href = "venus.html";
                break;
            case "earth":
                location.href = "earth.html";
                break;
            case "moon":
                location.href = "moon.html";
                break;
            case "mars":
                location.href = "mars.html";
                break;
            case "jupiter":
                location.href = "jupiter.html";
                break;
            case "saturn":
                location.href = "saturn.html";
                break;
            case "uranus":
                location.href = "uranus.html";
                break;
            case "neptune":
                location.href = "neptune.html";
                break;
            case "sun":
                location.href = "sun.html";
                //lupa();
                break;
            case "pluton":
                location.href = "pluto.html";
                break;
        }
    }
  }
window.addEventListener('click', PickPlanet);
window.addEventListener('mousemove', onMouseMove, false); 

animate();
rotate();
}
init();


