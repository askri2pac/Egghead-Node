
let express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModels'),
bodyParser = require('body-parser')

// mongoose instance connection url

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todoDB')

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

let routes = require('./api/routes/todoListRoutes') // importing routes
routes(app)


app.listen(port,()=>{
    console.log('todo list RESTful API server started on' + port)
})
