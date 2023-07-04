const server = require("./src/App.js");
const { conn } = require("./src/db.js")
const PORT = 3001;

server.listen(PORT, ()=>{
    conn.sync({force:true});
    console.log(("Server listen in port 3001"));
})