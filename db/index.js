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

    viewRoles() {
        return this.connection.promise().query(
            'SELECT id, title, salary, department_id FROM my_company.role;'
        )
    }

    viewEmployees() {
        return this.connection.promise().query(
            'SELECT id, first_name, last_name, role_id, manager_id FROM my_company.employee;'
        )
    }
}


module.exports = new Database(connection);