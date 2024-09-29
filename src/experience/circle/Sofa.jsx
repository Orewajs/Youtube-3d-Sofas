import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { sofas } from "../../constants";

const Sofa = (props) => {
  const { url, text, index, sofaSelected, price, ...rest } = props;
  const { scene } = useGLTF(url);
  const groupRef = useRef();
  useFrame(() => {
    groupRef.current.lookAt(new THREE.Vector3(3.96, 0, -0.84));
  });
  return (
    <group {...rest} ref={groupRef}>
      <primitive object={scene} />
      <Html
        transform
        position={[0, 2, 0]}
        className={`transition-opacity text-white select-none ${
          index === sofaSelected % sofas.length ? "opacity-100" : "opacity-0"
        } `}
      >
        <h2>{text}</h2>
        <button>
          {price} <span className="text-xs">USD</span>
        </button>
      </Html>
    </group>
  );
};

export default Sofa;
