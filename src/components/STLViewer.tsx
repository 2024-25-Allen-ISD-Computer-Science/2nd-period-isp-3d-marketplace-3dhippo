import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { STLLoader } from 'three-stdlib';

interface STLViewerProps {
  modelUrl: string;
}

const Model: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
  const modelRef = useRef<THREE.Group | null>(null);
  const { camera, scene } = useThree();

  useEffect(() => {
    const loader = new STLLoader();

    loader.load(modelUrl, (geometry) => {
      geometry.center(); 
    
      const material = new THREE.MeshStandardMaterial({
        color: 0x4169e1, 
        metalness: 0.4,  
        roughness: 0.1,  
      }); {/* Defines material for STL file */}
    
      const mesh = new THREE.Mesh(geometry, material);
    
      mesh.rotation.x = -Math.PI / 2; {/* Temporary--adjusts orinentation of ojbect  */}
    
      if (modelRef.current) {
        modelRef.current.clear(); 
        modelRef.current.add(mesh);
    
        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        box.getSize(size);
        const maxAxis = Math.max(size.x, size.y, size.z);
        mesh.scale.setScalar(1 / maxAxis); // Scale down model to fit
    
        const center = new THREE.Vector3();
        box.getCenter(center);
        camera.position.set(center.x, center.y + size.y * 2, center.z + size.z * 2);
        camera.lookAt(center);
      }
    });    
  }, [modelUrl, camera]);

  return <group ref={modelRef} />;
};

const STLViewer: React.FC<STLViewerProps> = ({ modelUrl }) => {
  return (
    <Canvas style={{ height: '500px' }} camera={{ position: [5, 5, 5], fov: 45 }}>
      <ambientLight intensity={1.0} /> 
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      <OrbitControls 
        maxDistance={1.5} 
        minDistance={1} 
      /> {/* User zoom limits */}

      <Grid 
        position={[0, -0.5, 0]} 
        args={[10, 10]} 
        cellSize={0.5}
        cellThickness={0.1} 
        cellColor="#808080" 
        sectionColor="#404040"
        fadeDistance={10} 
      /> {/* Displays grid underneath STL file */}

      {/*  */}
      <Model modelUrl={modelUrl} />
    </Canvas>
  );
};

export default STLViewer;
