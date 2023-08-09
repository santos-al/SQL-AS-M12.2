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

    addDepartment(newDepartment) {
        return this.connection.promise().query(
            `INSERT INTO my_company.department (name) VALUES ("${newDepartment}");`
        )
    }

    addRole(title, salary, department_id) {
        return this.connection.promise().query(
            `INSERT INTO my_company.role (title, salary, department_id) VALUES ("${title}", "${salary}", "${department_id}");`
        )
    }

    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.promise().query(
            `INSERT INTO my_company.employee (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}");`
        )
    }
}


module.exports = new Database(connection);