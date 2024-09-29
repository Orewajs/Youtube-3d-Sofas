import { useRef, useState } from "react";
import { sofas } from "../../constants";
import Sofa from "./Sofa";
import { Html } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Sofas = () => {
  const [sofaSelected, setSofaSelected] = useState(0);
  const sofasRef = useRef(null);
  useGSAP(() => {
    gsap.to(sofasRef.current.rotation, {
      y: sofaSelected * ((Math.PI * 2) / sofas.length),
      duration: 1,
    });
  }, [sofaSelected]);

  const handleClick = (direction) => {
    // setSofaSelected((sofaSelected + direction) % sofas.length);
    setSofaSelected(sofaSelected + direction);
  };
  const r = 2;
  return (
    <>
      <group ref={sofasRef}>
        {sofas.map(({ url, text, scale, price }, index) => {
          const angle = (Math.PI * 2 * index - Math.PI * 0.5) / sofas.length;
          const x = Math.cos(angle) * r;
          const z = Math.sin(angle) * r;
          return (
            <Sofa
              key={index}
              url={url}
              text={text}
              scale={scale}
              index={index}
              price={price}
              sofaSelected={sofaSelected}
              position={[x, 0, z]}
              rotation={[0, Math.PI * 0.5, 0]}
            />
          );
        })}
      </group>
      <Html
        style={{
          width: "100%",
          height: "100vh",
        }}
        position={[3.96, 0.44, -0.84]}
      >
        <div className="absolute -translate-x-1/2 translate-y-56 p-4 z-10 select-none text-white flex w-96 max-w-screen-lg justify-between">
          <button onClick={() => handleClick(-1)}>left</button>
          <button onClick={() => handleClick(1)}>right</button>
        </div>
      </Html>
    </>
  );
};

export default Sofas;
