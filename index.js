const { createVLESSServer } = require("@3kmfi6hp/nodejs-proxy");
const {v4} = require("uuid");
// 定义端口和 UUID
const port = 443;
const uuid = '87a3e815-7e0f-4bca-aca1-c06a57a862a8';

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);

console.log(`vless://${uuid}@127.0.0.1:${port}?encryption=none&security=none&fp=randomized&type=ws&path=%2F#TunnelAce - Free`)
