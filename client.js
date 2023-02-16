const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event "connect" handler
  conn.on("connect",() => {
    console.log("Successfully connected to game server");
    conn.write("Name: ROY");
  }
  );
  
  // conn.on("connect",() => {
  //   // setInterval(()=>{
  //   //   conn.write("Move: up");
  //   // },1000);
  // }
  // );

  // event data handler
  conn.on("data",(data) => {
    console.log("data:",data);
  }
  );

  conn.on("error", (err) => {
    console.log("error:",err);
  });

  return conn;
};

module.exports = {connect};