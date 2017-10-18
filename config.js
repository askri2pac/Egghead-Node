module.exports = {
    name : 'rest-api',
    version :'1.0.0',
    env: process.env.NODE_ENV || 'developement',
    port : process.env.PORT || 3000,
    db : {
            uri :'mongodb://nassim:<nassim>@young-sea-4000-shard-00-00-pmh1g.mongodb.net:27017,young-sea-4000-shard-00-01-pmh1g.mongodb.net:27017,young-sea-4000-shard-00-02-pmh1g.mongodb.net:27017/test?ssl=true&replicaSet=young-sea-4000-shard-0&authSource=admin'
    }

}