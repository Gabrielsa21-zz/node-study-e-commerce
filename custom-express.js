var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var load = require('express-load')

module.exports = () => {
    var app = express()
    
    app.set('view engine', 'ejs')
    
    app.use(bodyParser.urlencoded())
    
    require('./routes/products')(app)

    return app

    load('routes')
        .then('infra')
        .into(app)

    return app
}
