import { useEffect } from "react"
import { io } from "socket.io-client"
import { useAtom, atom } from "jotai"

export const socket = io("http://localhost:3001")
export const redCubesAtom = atom([])

export const SocketManager = () => {
  const [_redCubes, setRedCubes] = useAtom(redCubesAtom)

  useEffect(() => {
    function onRedCubes(value) {
      setRedCubes(value)
    }
    
    socket.on("redcubes", onRedCubes)

    return () => {
      socket.off("redcubes", onRedCubes)
    }
  }, [])
}