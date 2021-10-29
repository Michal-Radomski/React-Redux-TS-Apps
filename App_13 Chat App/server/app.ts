const webSocket = require("ws");

// Types and Interfaces
type User = {
  name: string;
  id: number;
};
type Users = User[];

type Data = {
  type: string;
  message?: string;
  author?: string;
  users?: Users;
};

interface WS {
  send(data: any): void;
  on(event: "open", listener: (this: WebSocket) => void): this;
  on(event: "message", listener: (this: WebSocket, data: string, isBinary: boolean) => void): this;
  on(event: "close", listener: (this: WebSocket, code: number, reason: Buffer) => void): this;
  readyState: typeof WebSocket.OPEN;
  message: string;
}

// Server App
const wss = new webSocket.Server({port: 8989});
const users: Users = [];

const broadcast = (data: Data, ws: WS) => {
  wss.clients.forEach((client: WS) => {
    if (client.readyState === webSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", (ws: WS) => {
  let index: number;
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case "ADD_USER": {
        index = users.length;
        users.push({name: data.name, id: index + 1});
        ws.send(
          JSON.stringify({
            type: "USERS_LIST",
            users: users,
          })
        );
        broadcast(
          {
            type: "USERS_LIST",
            users: users,
          },
          ws
        );
        break;
      }
      case "ADD_MESSAGE":
        broadcast(
          {
            type: "ADD_MESSAGE",
            message: data.message,
            author: data.author,
          },
          ws
        );
        break;
      default:
        break;
    }
  });

  ws.on("close", () => {
    users.splice(index, 1);
    broadcast(
      {
        type: "USERS_LIST",
        users: users,
      },
      ws
    );
  });
});

console.log("Server is working...");
