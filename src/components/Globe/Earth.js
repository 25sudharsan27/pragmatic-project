import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";


// CSS
import './Earth.css'; 


// Function to convert real-world coordinates to app coordinates
function convertToAppCoordinates(realLat, realLng) {
  const appLat = -1 * realLat + 102;
  const appLng = -0.5 * realLng + 180;
  return {
    latitude: parseFloat(appLat.toFixed(2)),
    longitude: parseFloat(appLng.toFixed(2)),
  };
}

// hard coded data
const locations = [
  {
    name: "U.A.E",
    realLat: 23.4241,
    realLng: 53.8478,
    ...convertToAppCoordinates(23.4241, 53.8478),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996056/pkobdcllgj1mqsrbitrw.webp',
    project: 10,
    value: "AED 2.318 Billion",
    value1: "$ 631.65 M"
  },
  {
    name: "India",
    realLat: 20.5937,
    realLng: 78.9629,
    ...convertToAppCoordinates(20.5937, 78.9629),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996050/uggkyak5ntqnqwklaxty.webp',
    project: 12,
    value: "INR 1640.43 Crores",
    value1: "$ 210.15 M"
  },
  {
    name: "Kuwait",
    realLat: 29.3759,
    realLng: 47.9774,
    ...convertToAppCoordinates(29.3759, 47.9774),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996052/yfrzxsdmuqf1zqw58edv.webp',
    project: 3,
    value: "KD 18 Million",
    value1: "$ 59.4 M"
  },
  {
    name: "Yemen",
    realLat: 15.5527,
    realLng: 48.5164,
    ...convertToAppCoordinates(15.5527, 48.5164),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996053/yltreslml82wkppggwpv.webp',
    project: 1,
    value: "USD 41 Million",
    value1: "$ 41 M"
  },
  {
    name: "KSA",
    realLat: 23.8859,
    realLng: 45.0792,
    ...convertToAppCoordinates(23.8859, 45.0792),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996055/j6zbs1531xbk6tpdwwkc.webp',
    project: 2,
    value: "SAR 90 Million",
    value1: "$ 24 Million"
  },
  {
    name: "Kazakhastan",
    realLat: 48.0196,
    realLng: 66.9237,
    ...convertToAppCoordinates(48.0196, 66.9237),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996051/pccj0gvixqdpyygmjk2b.webp',
    project: 1,
    value: "USD 14 Million",
    value1: " $14 M"
  },
  {
    name: "Oman",
    realLat: 21.4735,
    realLng: 55.9754,
    ...convertToAppCoordinates(21.4735, 55.9754),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996050/tnh3crfppe4fde6txdog.webp',
    project: 1,
    value: "OMR 3 Million",
    value1: "$ 7.8 M"
  },
  {
    name: "Qatar",
    realLat: 25.3548,
    realLng: 51.1839,
    ...convertToAppCoordinates(25.3548, 51.1839),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996051/axgvolktjrfnzuwksnbf.webp',
    project: 1,
    value: "QNR 8 Million",
    value1: "$ 2.2 M"
  },
  {
    name: "Nepal",
    realLat: 28.3949,
    realLng: 84.1240,
    ...convertToAppCoordinates(28.3949, 84.1240),
    image: 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735996051/ljk68xq1ihib4kn06po0.webp',
    project: 1,
    value: "USD 2.18 Million",
    value1: "$ 2.18 M"
  }
];


const GlobeWithTags = ({ani}) => {
  // State and Refs
  const mountRef = useRef(null);
  const globeRef = useRef(null); 
  const cameraRef = useRef(null);
  const cloudRef = useRef(null); 
  const tagRef = useRef(null); 
  const [currentIndex, setCurrentIndex] = useState(0);

  // Locations with longitude and latitude


  useEffect(() => {
    const preloadImages = () => {
      const loadedImages = [];
      locations.forEach((location) => {
        const img = new Image();
        img.src = location.image;
        img.onerror = () => {
          // console.log(`Failed to load image: ${location.name}`);
        };

        loadedImages.push(img);
      });
    };
    preloadImages();
  }, []);


  // Tag content state
  const [tag, setTag] = useState(locations[currentIndex]);

  const [isInView, setIsInView] = useState(false); // Track if the globe is in view

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5; 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();

    const earthMap = textureLoader.load("https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735992753/t62m7jrbhw8ehzqwscoi.webp"); // Base color map
    const earthBumpMap = textureLoader.load("https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735992752/knmquhiyed5xv7gkp9g4.webp"); // Bump map
    const earthSpecularMap = textureLoader.load("https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735992751/ubwkxc6b5sxcb1la4cso.webp"); // Specular map (for shine)

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
      map: textureLoader.load("https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735995624/hadqgavb9soop4hrfvzk.webp"),
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

    const ambientLight = new THREE.AmbientLight(0x777777, 1.5); // Lower intensity for softer lighting
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.4);
    scene.add(hemisphereLight);

    // Apply scale to reduce globe size
    earthMesh.scale.set(0.9, 0.9, 0.9);  // Scale down the globe to 90%

    // Cloud animation (rotate the cloud mesh to simulate slow movement)
    let cloudRotationSpeed = 0.0001; // Control the speed of cloud movement

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
    if (camera) {
      camera.aspect = window.innerWidth / 700; // Maintain aspect ratio with width
      camera.updateProjectionMatrix(); // Ensure the projection matrix is updated
    }

    // 2. Update the renderer size based on the width
    if (renderer) {
      renderer.setSize(window.innerWidth, 700);
    }

    // 3. Re-render the scene to reflect the resize
    if (scene && camera && renderer) {
      renderer.render(scene, camera);
    }

    // Adjust camera and tag positioning on window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;


      // 1. Update the camera aspect ratio based on the width, but DO NOT rescale the globe
      if (camera) {
        camera.aspect = newWidth / 700; // Maintain aspect ratio with width
        camera.updateProjectionMatrix(); // Ensure the projection matrix is updated
      }

      // 2. Update the renderer size based on the width
      if (renderer) {
        renderer.setSize(newWidth, 700);
      }

      // 3. Re-render the scene to reflect the resize
      if (scene && camera && renderer) {
        renderer.render(scene, camera);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []); // Empty dependency array ensures this runs only once

  const rotateGlobeToLocation = (index) => {
    const globeGroup = globeRef.current.parent;
    const camera = cameraRef.current;
  
    if (!globeGroup || !camera) return;
  
    const { longitude, latitude } = locations[index];
  
    // Convert latitude and longitude to radians
    const latRad = (latitude * Math.PI) / 180; // Latitude in radians
    const lonRad = (longitude * Math.PI) / 180; // Longitude in radians
  
    // Calculate the 3D position on the globe using spherical coordinates
    const targetPosition = new THREE.Vector3(
      Math.sin(latRad) * Math.cos(lonRad),  // X
      Math.cos(latRad),                    // Y
      Math.sin(latRad) * Math.sin(lonRad)   // Z
    );
  
    // Maintain a constant distance from the globe (e.g., 1.5 times the globe's radius)
    const targetCameraPosition = targetPosition.clone().multiplyScalar(1.5); 
  
    // Smoothly rotate the globe to face the target position
    const targetRotationY = lonRad; // Target rotation based on longitude
    const animationDuration = 1500; // 2 seconds for the animation duration
    const startRotationY = globeGroup.rotation.y;
    const startTime = performance.now();
  
    // Smooth camera movement speed
    const startCameraPosition = camera.position.clone();
  
    const animateRotation = (time) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
  
      // Smoothly update the globe's rotation around the Y axis
      globeGroup.rotation.y = THREE.MathUtils.lerp(startRotationY, targetRotationY, progress);
  
      // Smoothly move the camera position along the globe's surface to maintain constant distance
      camera.position.lerpVectors(startCameraPosition, targetCameraPosition, progress);
      camera.lookAt(globeGroup.position); // Ensure the camera is always focused on the center of the globe
  
      if (progress < 1) {
        requestAnimationFrame(animateRotation); // Continue animation
      }
    };
  
    requestAnimationFrame(animateRotation);
  };
  

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

  useEffect(() => {
    rotateGlobeToLocation(currentIndex); // Rotate to the first location immediately on initial load
  }, [currentIndex]);


  useEffect(() => {
    // Intersection Observer to detect if the globe is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const globeElement = mountRef.current;
    if (globeElement) observer.observe(globeElement);

    // Cleanup observer on unmount
    return () => {
      if (globeElement) observer.unobserve(globeElement);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isInView) {
      // Only start interval when the globe is in view
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % locations.length;
        setCurrentIndex(nextIndex);
        setTag(locations[nextIndex]);
        rotateGlobeToLocation(nextIndex);
      }, 3000); // Change location every 3 seconds
    } else {
      clearInterval(interval); // Stop interval if globe is not in view
    }

    return () => {
      clearInterval(interval); // Clear interval when the component unmounts or globe goes out of view
    };
  }, [currentIndex, isInView]); // Re-run the effect whenever the currentIndex or isInView changes

  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };

  return (
    <div className="glb-com">
      <div className="globe-heading-cont2">
        <div className="globe-heading-cont">
          <h1 className="globe-heading" {...getAosData("fade-up", 0)}>Places we serve</h1>
          <div className="global-line" {...getAosData("fade-up", 100)} id="globe-h"></div>        
        </div>
      </div>
      <div {...getAosData("fade-up", 200)} id="iet23" className="w35234">
        {/* Globe Container */}
        <div ref={mountRef} className="w35325"></div>

        {/* Tag Display Above the Globe */}
        <div className="w35235" ref={tagRef}>
          <img className="w3235-img" src={tag.image} alt="tag" />
          <div className="w3235-name-cont">
            <h2 className="w3235-name">{tag.name}</h2>
            <h2 className="w3235-usd-value">{tag.value1}</h2>
          </div>
          <div className="w3235-project-cont">
            <p className="w3235-project">Projects {tag.project}</p>
            <p className="w3235-value">Projects Value: {tag.value}</p>
          </div>
        </div>

        {/* Prev and Next Buttons */}
        <div className="w35236">
          <button className="w35236-c" onClick={handlePrev}>{`<`}<span className="labels-country" style={{marginLeft:"20px"}}>{locations[(currentIndex+locations.length-1)%locations.length].name}</span></button>
          <button className="w35236-c" onClick={handleNext}><span className="labels-country" style={{marginRight:"20px"}}>{locations[(currentIndex+locations.length+1)%locations.length].name}</span>{`>`}</button>
        </div>
      </div>
    </div>
  );
};


export default GlobeWithTags;
