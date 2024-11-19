import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const GlobeWithTags = () => {
  const mountRef = useRef(null);
  const globeRef = useRef(null); // Ref for the globe
  const [currentIndex, setCurrentIndex] = useState(0);

  // Locations for tags
  const locations = [
    { name: "Location 1", longitude: 0, latitude: 0 },
    { name: "Location 2", longitude: 90, latitude: 30 },
    { name: "Location 3", longitude: -60, latitude: -45 },
    { name: "Location 4", longitude: 180, latitude: 0 },
  ];

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();

    // Earth Globe Textures
    const earthMap = textureLoader.load("/textures/00_earthmap1k.jpg"); // Base color map
    const earthBumpMap = textureLoader.load("/textures/01_earthbump1k.jpg"); // Bump map
    const earthSpecularMap = textureLoader.load("/textures/02_earthspec1k.jpg"); // Specular map (for shine)
    const earthNightMap = textureLoader.load("/textures/03_earthlights1k.jpg"); // Night map (city lights)

    // Earth Material (with specular map and bump map)
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      bumpMap: earthBumpMap,
      bumpScale: 0.05,
      specularMap: earthSpecularMap, // Adding specular for reflective effects
      specular: new THREE.Color(0x333333), // Controlling the specular color
      emissiveMap: earthNightMap, // Add emissive map for city lights (night)
      emissive: new THREE.Color(0x888888), // Light up the night side with emissive color
      emissiveIntensity: 0.6, // Control the intensity of the emissive light
    });

    // Create Earth Globe
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeRef.current = earthMesh; // Reference to the globe for animation
    scene.add(earthMesh);

    // Cloud Layer (semi-transparent)
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/textures/04_earthcloudmap.pg"),
      transparent: true,
      opacity: 0.6, // Set opacity to 0.6 for better visibility
      depthWrite: false, // Prevent depth writing so that clouds blend better with the globe
      blending: THREE.AdditiveBlending, // Allow cloud transparency to blend well with the scene
    });
    const cloudGeometry = new THREE.SphereGeometry(1.02, 32, 32); // Slightly bigger than the Earth
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Lighting Setup
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    // // Ambient Light to illuminate the dark side of the Earth
    // const ambientLight = new THREE.AmbientLight(0x555555); // Dim ambient light
    // scene.add(ambientLight);

    // Animation Loop
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    // Smoothly rotate the globe to the target location when index changes
    const rotateGlobe = (index) => {
      const globe = globeRef.current;
      if (!globe) return;

      const { longitude } = locations[index];
      const targetRotationY = (longitude * Math.PI) / 180;

      // Smooth rotation using requestAnimationFrame
      const animationDuration = 1000; // 1 second
      const startRotationY = globe.rotation.y;
      const startTime = performance.now();

      const animateRotation = (time) => {
        const elapsedTime = time - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1); // Clamp progress to 0-1

        // Interpolation (Lerp) for smooth rotation
        globe.rotation.y =
          startRotationY + progress * (targetRotationY - startRotationY);

        if (progress < 1) {
          requestAnimationFrame(animateRotation);
        }
      };

      requestAnimationFrame(animateRotation);
    };

    rotateGlobe(currentIndex);
  }, [currentIndex]); // Re-run whenever currentIndex changes

  // Handle Button Clicks
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ border: "1px solid white", position: "relative", height: "100vh", width: "100%" }}>
      {/* Globe Container */}
      <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>

      {/* Tag Display */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>{locations[currentIndex].name}</h2>
        <div>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default GlobeWithTags;
