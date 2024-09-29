import { useRef, useState } from "react";
import { sofas } from "../constants";
import Sofa from "./Sofa";
import { Html } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Sofas = () => {
  const [sofaSelected, setSofaSelected] = useState(0);
  const sofasRef = useRef(null);
  useGSAP(() => {
    gsap.to(sofasRef.current.position, {
      x: -sofaSelected * 2,
      duration: 1,
    });
  }, [sofaSelected]);

  const handleClick = (direction) => {
    if (sofaSelected + direction < 0) return;
    if (sofaSelected + direction >= sofas.length) return;
    setSofaSelected(sofaSelected + direction);
  };
  return (
    <>
      <group ref={sofasRef}>
        {sofas.map(({ url, text, scale, price }, index) => (
          <Sofa
            key={index}
            url={url}
            text={text}
            scale={scale}
            index={index}
            price={price}
            sofaSelected={sofaSelected}
            position={[index * 2, 0, 0]}
          />
        ))}
      </group>
      <Html
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="absolute -translate-x-1/2 text-5xl translate-y-56 p-4 z-10 select-none text-white flex w-96 max-w-screen-lg justify-between">
          <button onClick={() => handleClick(-1)}>left</button>
          <button onClick={() => handleClick(1)}>right</button>
        </div>
      </Html>
    </>
  );
};

export default Sofas;
