module.exports = function(app, db){
// create route
    app.post('/notes',(req,res)=>{
        res.send('hello nassim')
        console.log(req.body)
    });
}
