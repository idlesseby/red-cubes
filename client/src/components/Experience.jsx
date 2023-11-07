import { Environment, Grid, OrbitControls } from "@react-three/drei";
import { useAtom } from "jotai";
import { redCubesAtom } from "./SocketManager";
import { RedCube } from "./RedCube";

export const Experience = () => {

  const [redCubes] = useAtom(redCubesAtom)

  return (
    <>
      <OrbitControls 
        enablePan={false}
        minDistance={8}
        maxDistance={25}
        maxPolarAngle={1.5}
      />
      
      <Environment preset="city"/>

      <Grid
        position={[0, -0.01, 0]}
        cellColor={'#FF00FE'}
        infiniteGrid
      />

      {
        redCubes.map((redCube) => (
          <RedCube key={redCube.id} id={redCube.id} position={redCube.position}/>
        ))
      }
    </>
  );
};