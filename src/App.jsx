import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Index from "./experience/Index";

function App() {
  return (
    <section className="h-screen">
      <Canvas
        camera={{
          position: [0, 0, 2],
          // position: [3.96, 0.44, -0.84],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
      >
        <OrbitControls />
        {/* <OrbitControls target={[2, 0, -0.45]} /> */}
        <Index />
      </Canvas>
    </section>
  );
}

export default App;
