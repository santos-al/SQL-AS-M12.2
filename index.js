const inquirer = require('inquirer');
const db = require('./db')

function init() {
    console.log(`\n---------------------------------------------------------\n Welcome to my employee tracker app \n---------------------------------------------------------\n`)
    startApp();
}

function startApp() {
    inquirer.prompt([
        {
            type: 'list',
            message: '\nWhat would you like to do today? \n',
            name: 'userChoice',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Quit']
        }
    ])
    .then((data) => {
        switch (data.userChoice) {
            case 'View Departments':
                viewAllDepartments();
                break;
            case 'Quit':
                quit();
                break;
            case 'View Roles':
                viewAllRoles();
                break;
            case 'View Employees':
                viewAllEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
        }
    });
}

function quit() {
    process.exit();
}

function viewAllDepartments() {
    db.viewDepartments()
    .then(([departments]) => {
        console.table(departments);
    })
    .then(() => {
        startApp();
    });
}

function viewAllRoles() {
    db.viewRoles()
    .then(([roles]) => {
        console.table(roles);
    })
    .then(() => {
        startApp();
    });
}

function viewAllEmployees() {
    db.viewEmployees()
    .then(([employees]) => {
        console.table(employees);
    })
    .then(() => {
        startApp();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department you would like to add?',
            name: 'newDepartment'
        }
    ])
    .then((data) => {
        db.addDepartment(data.newDepartment)
        console.log(`\n---------------------------------------------------------\n New Department has been added \n---------------------------------------------------------\n`)
    })
    .then(() => {
        startApp();
    });

}

function addRole() {
    db.viewDepartments()
    .then(([departments]) => {
      const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }));
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the role you would like to add?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is the salary of the role?',
                name: 'salary'
            },
            {
                type: 'list',
                message: 'What department will the role be a part of?',
                name: 'department_id',
                choices: departmentChoices
            }
        ])
        .then((data) => {
            db.addRole(data.title, data.salary, data.department_id)
            console.log(`\n---------------------------------------------------------\n New role has been added \n---------------------------------------------------------\n`)
        })
        .then(() => {
            startApp();
        });
        })
}

function addEmployee() {
    db.viewRoles()
    .then(([roles]) => {
      const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
      }));
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the first name of the employee you would like to add?',
                name: 'first_name'
            },
            {
                type: 'input',
                message: 'What is the last name of the employee you would like to add?',
                name: 'last_name'
            },
            {
                type: 'list',
                message: "What will be the employee's?",
                name: 'role_id',
                choices: roleChoices
            }
        ])
        .then((data) => {
            let first_name = data.first_name;
            let last_name = data.last_name;
            let role_id = data.role_id;

            db.viewEmployees()
            .then(([employees]) => {
              const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
              }));
              inquirer.prompt([
                {
                    type: 'list',
                    message: "Who will be the employee's manager?",
                    name: 'manager_id',
                    choices: managerChoices
                }
                ])
                .then((data) => {
                    db.addEmployee(first_name, last_name, role_id, data.manager_id)
                    console.log(`\n---------------------------------------------------------\n New Employee has been added \n---------------------------------------------------------\n`)
                    startApp();
                })
            })
         })
    })
}

// function updateEmployeeRole {}

init();

