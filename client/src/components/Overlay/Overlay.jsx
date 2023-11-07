import { useAtom } from "jotai";
import { redCubesAtom } from "../SocketManager";
import "./Overlay.css"

export const Overlay = () => {

  const [redCubes] = useAtom(redCubesAtom)

  let distance = 0
  
  redCubes.map(cube => {
    if(Math.abs(cube.position[0]) > distance) distance = Math.abs(cube.position[0])
    if(Math.abs(cube.position[2]) > distance) distance = Math.abs(cube.position[0])
  })

  return (
    <div className="overlay">
      <div className="active-cubes">
        <p>Number of active cubes: <span style={{fontWeight: "200"}}>{redCubes.length}</span></p>
        <p>Farthest away from center: <span style={{fontWeight: "200"}}>{distance.toFixed(2)}m</span></p>
      </div>

    </div>
  )
}
