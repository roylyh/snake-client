const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541,// PORT number here,
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