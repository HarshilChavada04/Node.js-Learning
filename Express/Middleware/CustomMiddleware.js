const express = require('express');
const app = express();

const CustomMiddleware = (req, res, next) => {
    let timeStamp = new Date(Date.now()).toString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

module.exports = CustomMiddleware;