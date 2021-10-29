var webSocket = require("ws");
// Server App
var wss = new webSocket.Server({ port: 8989 });
var users = [];
var broadcast = function (data, ws) {
    wss.clients.forEach(function (client) {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }
    });
};
wss.on("connection", function (ws) {
    var index;
    ws.on("message", function (message) {
        var data = JSON.parse(message);
        switch (data.type) {
            case "ADD_USER": {
                index = users.length;
                users.push({ name: data.name, id: index + 1 });
                ws.send(JSON.stringify({
                    type: "USERS_LIST",
                    users: users
                }));
                broadcast({
                    type: "USERS_LIST",
                    users: users
                }, ws);
                break;
            }
            case "ADD_MESSAGE":
                broadcast({
                    type: "ADD_MESSAGE",
                    message: data.message,
                    author: data.author
                }, ws);
                break;
            default:
                break;
        }
    });
    ws.on("close", function () {
        users.splice(index, 1);
        broadcast({
            type: "USERS_LIST",
            users: users
        }, ws);
    });
});
console.log("Server is working...");
