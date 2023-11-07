import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei';
import { useRef } from 'react'

export const Annotation = ({position}) => {
  const ref = useRef()

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
  })

  return (
    <group ref={ref} position={position}>
      <Html transform>
        <div>
          <p>You</p>
        </div>
      </Html>
    </group>
  )
}