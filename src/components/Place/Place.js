import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const locations = [
  { name: 'India', coords: [1.5, 0.5, -1.2], phone: 'XXXXX XXXXX', email: 'xyz@abc.com', image: '/api/placeholder/200/150' },
  { name: 'Oman', coords: [-1, 0.8, 1.2], phone: 'XXXXX XXXXX', email: 'xyz@abc.com' },
  { name: 'Dubai', coords: [0.5, 1.1, -1.5], phone: 'XXXXX XXXXX', email: 'xyz@abc.com' }
];

const LocationCard = ({ location, position, visible }) => {
  if (!visible) return null;
  
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{
      left: position[0],
      top: position[1]
    }}>
      <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-4 min-w-[200px]">
        {location.image && (
          <img 
            src={location.image} 
            alt={location.name}
            className="w-full h-32 object-cover rounded-md mb-3"
          />
        )}
        <h3 className="text-xl font-semibold text-white mb-2">{location.name}</h3>
        <div className="space-y-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">📞</span>
            {location.phone}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">✉️</span>
            {location.email}
          </div>
        </div>
      </div>
    </div>
  );
};

function Globe() {
  const globeRef = useRef();
  const [activeLocation, setActiveLocation] = useState(null);
  const [cardPosition, setCardPosition] = useState([0, 0]);

  useFrame(() => {
    globeRef.current.rotation.y += 0.001;
  });

  const handleLocationClick = (event, location) => {
    event.stopPropagation();
    const rect = event.target.getBoundingClientRect();
    setCardPosition([rect.left, rect.top]);
    setActiveLocation(location);
  };

  return (
    <group ref={globeRef}>
      <Sphere args={[2, 64, 64]} scale={1.5}>
        <meshPhongMaterial
          color="#142940"
          emissive="#072436"
          specular="#000000"
          shininess={0}
          wireframe={true}
          wireframeLinewidth={0.5}
        />
      </Sphere>
      
      {locations.map((loc, index) => (
        <group key={index} position={loc.coords}>
          <mesh onClick={(e) => handleLocationClick(e, loc)}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#4FD1C5" />
          </mesh>
          <mesh position={[0, 0, 0.1]}>
            <ringGeometry args={[0.06, 0.08, 32]} />
            <meshBasicMaterial color="#4FD1C5" transparent opacity={0.4} />
          </mesh>
        </group>
      ))}
      
      {locations.map((loc, index) => (
        <LocationCard
          key={index}
          location={loc}
          position={cardPosition}
          visible={activeLocation?.name === loc.name}
        />
      ))}
    </group>
  );
}

const GlobeVisualization = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-3xl font-bold text-white text-center">Places we serve</h1>
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.15} />
        <Globe />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default GlobeVisualization;