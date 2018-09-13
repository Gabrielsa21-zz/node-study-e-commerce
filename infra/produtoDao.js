// function ProdutoDao(connection) {
//     this._connection = connection
// }

// ProdutoDao.prototype.lista = function (callback) {
//     return this._connection.query('select * from roupas', callback)
// }

class ProdutoDao{
    constructor(connection){
        this._connection = connection
    }

    lista(callback) {
        return this._connection.query('select * from roupas', callback)
    }
}
module.exports = ProdutoDao


