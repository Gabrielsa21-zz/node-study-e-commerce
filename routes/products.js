var connectionFactory = require('../infra/connectionFactory')
var produtoDao = require('../infra/produtoDao')

module.exports = function (app) {
    app.get('/produtos', (req, res) => {
        console.log("router")

        var connection = connectionFactory()
        
        var produtoDao = new produtoDao(connection) //produtoDao is not a constructor

        produtoDao.lista(function (err, result, fields) {
                res.render('products/list', {list: result})
            }
        )

        connection.end()
    })
}