var express = require('express')
var app = express()
var load = require('express-load')

module.exports = () => {
    var app = express()

    app.set('view engine', 'ejs')

    load('routes')
        .then('infra')
        .into(app)

    return app
}
