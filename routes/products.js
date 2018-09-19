
module.exports = function (app) {
    app.get('/produtos', (req, res) => {
        console.log("router", app.infra)

        var connection = app.infra.connectionFactory()
        
        var produto = new app.infra.produtoDao(connection) //produtoDao is not a constructor

        produto.lista(function (err, result, fields) {
                res.render('products/list', {list: result})
            }
        )

        connection.end()
    })
}
