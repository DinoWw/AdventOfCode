const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim().split('\n');
