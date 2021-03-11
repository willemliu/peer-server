const { PeerServer } = require("peer");
const port = process.env.PORT || 443;
PeerServer({ port, path: "/", proxied: true });
