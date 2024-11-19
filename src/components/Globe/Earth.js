import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import './Earth.css'; // Link the CSS file here

import tagimg from '../images/India.png'; // Import the tag image

const GlobeWithTags = () => {
  const mountRef = useRef(null);
  const globeRef = useRef(null); // Ref for the globe
  const cameraRef = useRef(null); // Ref for the camera
  const cloudRef = useRef(null); // Ref for the cloud mesh
  const tagRef = useRef(null); // Ref for the tag element
  const [currentIndex, setCurrentIndex] = useState(0);

  // Locations with longitude and latitude
  const locations = [
    { name: "India", longitude: 50.96, latitude: 82.59, project: "Project A", value: "$50M" },
    { name: "Mexico", longitude: 138.55, latitude: 88.63, project: "Project B", value: "$30M" },
    { name: "Saudi Arabia", longitude: 65.1, latitude: 85.88, project: "Project C", value: "$70M" },
    { name: "China", longitude: 35.19, latitude: 76.86, project: "Project D", value: "$90M" },
    { name: "South Africa", longitude: 77.00, latitude: 136.00, project: "Project E", value: "$40M" },
  ];

  // Tag content state
  const [tag, setTag] = useState(locations[currentIndex]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5; // Adjusted the camera position to keep the globe at the center of the view
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();

    // Earth Globe Textures
    const earthMap = textureLoader.load("/textures/8k_earth_daymap.jpg"); // Base color map
    const earthBumpMap = textureLoader.load("/textures/01_earthbump1k.jpg"); // Bump map
    const earthSpecularMap = textureLoader.load("/textures/02_earthspec1k.jpg"); // Specular map (for shine)

    // Earth Material (without emissive map)
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      bumpMap: earthBumpMap,
      bumpScale: 0.05,
      specularMap: earthSpecularMap,
      specular: new THREE.Color(0x333333),
      emissive: new THREE.Color(0x888888),
      emissiveIntensity: 0.0, // No emissive lighting
    });

    // Create Earth Globe with reduced size (radius = 1)
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32); // Earth size is 1
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeRef.current = earthMesh;

    // Cloud Layer
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/textures/8k_earth_clouds.jpg"),
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const cloudGeometry = new THREE.SphereGeometry(0.92, 32, 32); // Clouds are slightly larger (0.92)
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    cloudRef.current = cloudMesh;

    // Group Earth and Clouds together
    const globeGroup = new THREE.Group();
    globeGroup.add(earthMesh);
    globeGroup.add(cloudMesh);
    scene.add(globeGroup);

    // Lighting Setup
    const light1 = new THREE.DirectionalLight(0xffffff, 1.2);
    light1.position.set(5, 3, 5); // Sunlight direction from one side
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1.1);
    light2.position.set(-5, -3, -5); // Second light from the opposite direction
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0x777777, 0.8); // Lower intensity for softer lighting
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
    scene.add(hemisphereLight);

    // Apply scale to reduce globe size
    earthMesh.scale.set(0.9, 0.9, 0.9);  // Scale down the globe to 90%

    // Cloud animation (rotate the cloud mesh to simulate slow movement)
    let cloudRotationSpeed = 0.00005; // Control the speed of cloud movement

    // Animation Loop
    const animate = () => {
      // Rotate the cloud mesh slowly
      if (cloudRef.current) {
        cloudRef.current.rotation.y += cloudRotationSpeed;
      }

      // Render the scene
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Adjust camera and tag positioning on window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      // Update camera aspect ratio
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      // Adjust the renderer size
      renderer.setSize(newWidth, newHeight);

      // Adjust the camera position to maintain the same center
      camera.position.set(0, 0, 5); // Keep the camera at the same distance from the globe
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const rotateGlobeToLocation = (index) => {
    const globeGroup = globeRef.current.parent;
    const camera = cameraRef.current;

    if (!globeGroup || !camera) return;

    const { longitude, latitude } = locations[index];

    // Convert latitude and longitude to radians
    const phi = (latitude * Math.PI) / 180;
    const theta = ((longitude + 180) * Math.PI) / 180;

    // Calculate the target position of the globe
    const targetPosition = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta)
    );

    // Smoothly rotate the globe to face the target position
    const targetRotationY = (longitude * Math.PI) / 180;
    const animationDuration = 2000; // 2 seconds animation duration
    const startRotationY = globeGroup.rotation.y;
    const startTime = performance.now();

    const animateRotation = (time) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      // Update globe rotation
      globeGroup.rotation.y = startRotationY + progress * (targetRotationY - startRotationY);

      // Keep the camera distance fixed and smoothly move the camera
      const targetCameraPosition = targetPosition.clone().multiplyScalar(1.5);
      camera.position.lerp(targetCameraPosition, progress); // Smooth transition for camera position
      camera.lookAt(globeGroup.position); // Make sure camera always looks at the center of the globe

      if (progress < 1) {
        requestAnimationFrame(animateRotation);
      }
    };

    requestAnimationFrame(animateRotation);
  };

  // Rotate the globe to the initial location on mount
  useEffect(() => {
    rotateGlobeToLocation(currentIndex);
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % locations.length;
    setCurrentIndex(nextIndex);
    setTag(locations[nextIndex]);
    rotateGlobeToLocation(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? locations.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setTag(locations[prevIndex]);
    rotateGlobeToLocation(prevIndex);
  };

  return (
    <div id="iet23" className="w35234">
      {/* Globe Container */}
      <div ref={mountRef} className="w35325"></div>

      {/* Tag Display Above the Globe */}
      <div className="w35235" ref={tagRef}>
        <img className="w3235-img" src={tagimg} alt="tag" />
        <h2 className="w3235-name">{tag.name}</h2>
        <p className="w3235-project">{tag.project}</p>
        <p className="w3235-value">Project Value: {tag.value}</p>
      </div>

      {/* Prev and Next Buttons */}
      <div className="w35236">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default GlobeWithTags;
