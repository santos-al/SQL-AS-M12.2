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
            message: 'What would you like to do today',
            name: 'userChoice',
            choices: ['View Departments', 'Quit']
        }
    ])
    .then((data) => {
        switch (data.userChoice) {
            case 'View Departments':
                viewAllDepartments();
                break;
            case 'Quit':
                break;
        }
    });
}

function viewAllDepartments() {
    db.viewDepartments()
    .then(([departments]) => {
        console.table(departments)
      })
      .then(() => {
        startApp()
      })
}

// function viewAllRoles () {}

// function viewAllEmployees () {}

// function addDepartment

// function addRole

// function addEmployee

// function updateEmployeeRole

init();