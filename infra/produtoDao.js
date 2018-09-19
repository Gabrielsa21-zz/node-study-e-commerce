
module.exports = class ProdutoDao {
    constructor(connection) {
        this._connection = connection
    }

    lista(callback) {
        return this._connection.query('select * from roupas', callback)
    }
}