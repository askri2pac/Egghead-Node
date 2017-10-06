let mongoose = require('mongoose')
let schema = mongoose.Schema

let taskSchema = new schema({
    name : {
      type :String,
      required: 'enter the name of the task'
    },
    Created_day : {
        type : Date,
        default : Date.now
    },
    status : {
        type : [{
            type : String,
            enum : ['pending','Ongoing','completed']
        }],
        default : 'pending'
    }
})

module.exports = mongoose.model('Tasks',taskSchema)
