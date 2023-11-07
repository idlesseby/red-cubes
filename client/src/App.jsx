import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { SocketManager } from "./components/SocketManager";
import { Overlay } from "./components/Overlay/Overlay";

function App() {
  return (
    <>
      <SocketManager/>
      <Overlay/>
        <Canvas shadows camera={{ position: [10, 5, 0], fov: 40 }}>
          <Experience />
        </Canvas>
    </>
  )
}

export default App;