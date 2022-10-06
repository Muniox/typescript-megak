"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send('hello from ts-node-dev');
});
app.listen(3000, 'localhost', () => {
    console.log('serwer działa na http://localhost:3000');
});
//# sourceMappingURL=index.js.map