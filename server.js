const { PeerServer } = require("peer");
const port = process.env.PORT || 443;
const peerServer = PeerServer({ port, path: "/", proxied: true });
console.log(`Serving on ${port}`);
let clients = [];
peerServer.on("connection", (client) => {
    clients.push({ id: client.getId(), client });
    console.log(`Connections ${clients.length}`);
});

peerServer.on("disconnect", (client) => {
    clients = clients.filter((_client) => _client.id !== client.getId());
    console.log(`Connections ${clients.length}`);
});
