const { createVLESSServer } = require("@3kmfi6hp/nodejs-proxy");
const {v4} = require("uuid");
const express = require('express')
const app = express()
const port = 443;
const uuid = v4;

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);

app.get('/', (req, res) => {
    res.send(`vless://${uuid}@127.0.0.1:${port}?encryption=none&security=none&fp=randomized&type=ws&path=%2F#TunnelAce - Free`);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
