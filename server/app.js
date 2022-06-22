const express = require("express");
const app = express();
const time = Date.now() + 28800000;
const today = new Date(time).toUTCString();

console.log(`${today}+8`);
