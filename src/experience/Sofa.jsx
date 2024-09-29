import { Html, useGLTF } from "@react-three/drei";

const Sofa = (props) => {
  const { url, text, index, sofaSelected, price, ...rest } = props;
  const { scene } = useGLTF(url);
  return (
    <group {...rest}>
      <primitive object={scene} />
      <Html
        transform
        position={[0, 1.5, 0]}
        className={`transition-opacity text-white select-none text-sm text-center ${
          index === sofaSelected ? "opacity-100" : "opacity-0"
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
