<<<<<<< HEAD
let express = require('express'),
app = express(),
port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log("on est sur le port 3000")
})
=======
var express = require("express"),
app = express(),
port = process.env.PORT || 3000

app.listen(port)

console.log("listening on port" + port)
>>>>>>> origin/master
