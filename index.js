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
            message: 'What would you like to do today \n',
            name: 'userChoice',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Quit']
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

function viewAllRoles () {
    db.viewRoles()
    .then(([roles]) => {
        console.table(roles);
    })
    .then(() => {
        startApp();
    });
}

function viewAllEmployees () {
    db.viewEmployees()
    .then(([employees]) => {
        console.table(employees);
    })
    .then(() => {
        startApp();
    });
}

// function addDepartment {}

// function addRole {}

// function addEmployee {}

// function updateEmployeeRole {}

init();