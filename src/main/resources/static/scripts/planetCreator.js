import * as THREE from '../../node_modules/three/build/three.module.js';

export function createPlanet(Radius, WidthSegment,HeightSegment,UrlTexture,TypeMesh) {
    const geometry = new THREE.SphereGeometry(Radius,WidthSegment,HeightSegment);
    const textura = new THREE.TextureLoader().load(UrlTexture);
    let material;
    switch(TypeMesh){
        case "Phong":
            material = new THREE.MeshPhongMaterial( { map: textura } );
            break;
        case "Standard":
            material = new THREE.MeshStandardMaterial( { map: textura } );
            break;
        case "Basic":
            material = new THREE.MeshBasicMaterial( { map: textura } );
            break;
    }
    
    return new THREE.Mesh( geometry, material );
}

export function createPlanetWithBump(Radius, WidthSegment,HeightSegment,UrlTexture,UrlBump,BumpScale) {
    const geometry = new THREE.SphereGeometry(Radius,WidthSegment,HeightSegment);
    const material = new THREE.MeshPhongMaterial({
                        map : new THREE.TextureLoader().load(UrlTexture),
                        bumpMap : new THREE.TextureLoader().load(UrlBump),
                        bumpScale : BumpScale,
                    });
    return new THREE.Mesh( geometry, material );
}

export function createRing(Radius,Tube,RadialSegment,TubularSegment,UrlTexture,Opacity) {
    const geometry = new THREE.TorusGeometry( Radius, Tube, RadialSegment, TubularSegment );
    const textura = new THREE.TextureLoader().load(UrlTexture);
    const material = new THREE.MeshBasicMaterial( { map: textura,transparent: true,opacity: Opacity } );
    return new THREE.Mesh( geometry, material );
}

export function createStars(Radius, WidthSegment,HeightSegment,UrlTexture,) {

    const stargeometry = new THREE.SphereGeometry(Radius,WidthSegment,HeightSegment);
    const starmaterial = new THREE.MeshBasicMaterial({
        map : new THREE.TextureLoader().load(UrlTexture),
        side : THREE.BackSide,
    });
    return new THREE.Mesh( stargeometry, starmaterial);
}

export function createBox(Radius, WidthSegment,HeightSegment,UrlTexture,) {
    const geometry = new THREE.BoxGeometry(Radius,WidthSegment,HeightSegment);
    const textura = new THREE.TextureLoader().load(UrlTexture);
    const material = new THREE.MeshBasicMaterial( { map: textura } );
    return new THREE.Mesh( geometry, material);
}

export function createSun(Radius, WidthSegment,HeightSegment,UrlTexture,UrlBump) {
    const geometry_sun = new THREE.SphereGeometry(Radius,WidthSegment,HeightSegment);
    const textura_sun = new THREE.TextureLoader().load(UrlTexture);
    const normaltex_sun = new THREE.TextureLoader().load(UrlBump)
    const material_sun = new THREE.MeshBasicMaterial( { map: textura_sun, normalMap: normaltex_sun } );
    return new THREE.Mesh( geometry_sun, material_sun );
}