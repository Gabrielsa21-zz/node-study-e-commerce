var express = require('express')

module.exports = () => {
    var app = express()

    app.set('view engine', 'ejs')

    require('./routes/products')(app)
    console.log("custom-express")
    return app
}
