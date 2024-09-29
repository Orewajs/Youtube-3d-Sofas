import { Environment } from "@react-three/drei";
import Sofas from "./Sofas";
// import Sofas from "./circle/Sofas";

const Index = () => {
  return (
    <>
      <Environment preset="city" />
      <Sofas />
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 2, 5]} />
    </>
  );
};

export default Index;
