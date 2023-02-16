const WebSocket = require("ws")

const websocket = new WebSocket.Server({ port: 3000 })

websocket.on("connection", (ws) => {
  console.log("client connected successfully")

  ws.on("message", (input) => {
    console.log(`Input text received: ${input}`)
  })
})

console.log("server connected")
