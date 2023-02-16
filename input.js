const { Console } = require("console");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  switch (key) {
  case "w":
    // console.log("Move: up");
    connection.write("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "\u0003":
    process.exit();
    break;
  default:
    break;
  }
};

module.exports = {setupInput};