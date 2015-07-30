(function() {
    'use strict';
    
    //make a scene, the root of any scene graph
    var scene = new THREE.Scene();
    
    //make a camera with an FOV of 75, an aspect ratio matching this window, and clipping planes at these values
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    //make a renderer with 1:1 resolution and attach its canvas to the body of the page
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x2c2c2c, 1);
    document.body.appendChild(renderer.domElement);
    
    //make a cube with a different color on every face
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var materials = new THREE.MeshFaceMaterial([
        new THREE.MeshBasicMaterial({color: 0x00ff00}),
        new THREE.MeshBasicMaterial({color: 0x00ff00}),
        new THREE.MeshBasicMaterial({color: 0x0000ff}),
        new THREE.MeshBasicMaterial({color: 0x0000ff}),
        new THREE.MeshBasicMaterial({color: 0xff0000}),
        new THREE.MeshBasicMaterial({color: 0xff0000})
    ]);
    var cube = new THREE.Mesh(geometry, materials);
    
    //move it back a bit (so the camera's not inside it), then add it to the scene
    cube.position.setZ(-2.5);
    scene.add(cube);
    
    //called once per frame
    function render() {
        window.requestAnimationFrame(render);
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        renderer.render(scene, camera);
    }
    render();
}());