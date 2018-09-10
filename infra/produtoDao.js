function ProdutoDao(connection) {
    this._connection = connection
}

ProdutoDao.prototype.lista = function (callback) {
    this._connection.query('select * from roupas', callback)
}

module.exports = ProdutoDao