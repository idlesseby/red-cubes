import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Annotation } from "./Annotation"
import { socket } from './SocketManager'

export const RedCube = ({id, position}) => {

  const cube = useRef()

  useFrame((state, delta) => {
    cube.current.rotation.y += 1 * delta
  })

  return (
    <>
      {socket.id === id && 
        <Annotation position={[position[0], position[1] + 0.7, position[2]]}/>
      }
      <mesh ref={cube} castShadow position={position} scale={0.4}>
        <boxGeometry />
        <meshStandardMaterial color={0xFF0000}/>
      </mesh>
    </>
  )
}
