var cube;
 
// Set the scene size.
const WIDTH = document.getElementById("scene3d").clientWidth;
const HEIGHT = 800;
 
// Set some camera attributes.
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;
 
// Get the DOM element to attach to
const container =
    document.getElementById("scene3d");

// Create a WebGL renderer, camera
// and a scene
const renderer = new THREE.WebGLRenderer();
const camera =
    new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
    );
 
const scene = new THREE.Scene();
 
//const controls = new THREE.OrbitControls(camera, renderer.domElement);
 
// Add the camera to the scene.
scene.add(camera);
 
// Start the renderer.
renderer.setSize(WIDTH, HEIGHT);
 
// Attach the renderer-supplied
// DOM element.
container.appendChild(renderer.domElement);
 
// create a point light
const pointLight =
    new THREE.PointLight(0xFFFFFF);
 
// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
 
// add to the scene
scene.add(pointLight);
 
// create the sphere's material
const sphereMaterial =
    new THREE.MeshLambertMaterial(
        {
            color: 0xCC0000
        });
 
// Set up the sphere vars
const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;
 
// Create a new mesh with
// sphere geometry - we will cover
// the sphereMaterial next!
/*
    const sphere = new THREE.Mesh(
 
    new THREE.SphereGeometry(
        RADIUS,
        SEGMENTS,
        RINGS),
 
    sphereMaterial);
*/
 
cube = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), new THREE.MeshBasicMaterial({ color: "green", wireframe: true }));
 
// Move the Sphere back in Z so we
// can see it.
cube.position.z = -300;
 
// Finally, add the sphere to the scene.
scene.add(cube);
 
var cubeAxis = new THREE.AxisHelper(100);
cube.add(cubeAxis);
 
function update() {
    // Draw!
    renderer.render(scene, camera);
 
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;
    cube.rotation.z += 0.0025;
 
    // Schedule the next frame.
    requestAnimationFrame(update);
}
 
// Schedule the first frame.
requestAnimationFrame(update);