// components/ThreeDAnimation.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const Box = (props) => {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#8884d8'} />
    </mesh>
  );
};

const ThreeDAnimation = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
};

export default ThreeDAnimation;
