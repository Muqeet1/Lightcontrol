

const io = require("socket.io-client");
export const SITEKEY = "needed-endurable-plough";

const socket = io.connect('wss://api.mountkelvin.com/', {
  reconnectionDelay: 1000,
  reconnectionDelayMax: 3000,
  transports: ["websocket"],
});

export default socket