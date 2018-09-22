
module.exports = class ProdutoDao {
    constructor(connection) {
        this._connection = connection
    }

    salva(callback) {
        this._connection.query('insert into livros SET ?', livro, callback)
    }

    lista(callback) {
        return this._connection.query('select * from roupas', callback)
    }
}