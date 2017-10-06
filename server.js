
let express = require('express'),
app = express(),
port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log("on est sur le port 3000")
})
