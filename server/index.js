import { Server } from "socket.io"

const io = new Server({
  cors: {
    origin: "http://127.0.0.1:5173"
  }
})

io.listen(3001)

const redCubes = []

const generateRandomPosition = () => {
  return [Math.random() * 21 - 10, 0.3, Math.random() * 21 - 10]
}

io.on("connection", (socket) => {
  redCubes.push({
    id: socket.id,
    position: generateRandomPosition()
  })

  io.emit("redcubes", redCubes)

  socket.on("disconnect", () => {
    redCubes.splice(
      redCubes.findIndex((redCube) => redCube.id === socket.id),
      1
    )

    io.emit("redcubes", redCubes)
  })
})