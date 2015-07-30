(function() {
    'use strict';
    
    //make a scene, the root of any scene graph
    var scene = new THREE.Scene();
    
    //make a camera with an FOV of 75, an aspect ratio matching this window, and clipping planes at these values
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    
    //make a renderer with 1:1 resolution and attach its canvas to the body of the page
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x2c2c2c, 1);
    document.body.appendChild(renderer.domElement);
    
    //add camera + touch camera controls to the canvas
    var controls = new THREE.OrbitControls(camera, render.domElement);
    
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
    scene.add(cube);
    
    //called once per frame
    function render() {
        window.requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
    
    //window resize handler
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }
    window.addEventListener('resize', onWindowResize, false);
}());