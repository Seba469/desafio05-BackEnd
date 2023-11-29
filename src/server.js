import http from "http"

import app from "./app.js"
import { init as initSocket } from './socket.js';
import { init } from './db/mongodb.js';

await init()

const server = http.createServer(app);

initSocket(server)

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});