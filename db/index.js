const connection = require('../config/connection.js');

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    viewDepartments() {
        return this.connection.promise().query(
            'SELECT id, name FROM my_company.department;'
        )
    }
}


module.exports = new Database(connection);