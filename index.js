const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'confirm',
        name: 'intro',
        message: `Welcome to My Easy Team Tracker app. This tool was created to help keep track of your company's staff and update it in an organized fashion. Answer the next questions to select if you want to see information about your team, update an employee funtion, add a new employee or create a new role or a new department on your company.`
    },
    {
        type: `list`,
        name: `action`,
        choices: [`view all departments`, `view all roles`, `view all employees`, `add a department`, `add a role`, `add an employee`, `update an employee role`], 
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `You have to select an action in order to continue. If you do not need any of those options, you can close the terminal to finish the application. If you need to handle your database with an action that is not available in the list, contact the developer team. Email: leopoldogbp@gmail.com`
            }
        }
    },
    {
        type: `input`,
        name: `departmentName`,
        message: `What id the name of your company's new department?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `A department name is needed in order to continue.`
            }
        },
        when: (answers) => answers.action == 'add a department'
    },
    {
        when: (answers) => answers.action == 'add a role',
        type: 'input',
        name: 'roleName',
        message: `What is the name of the new role?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `A role name is needed in order to continue.`
            }
        }
    },
    {
        when: (answers) => answers.action == 'add a role',
        type: 'input',
        name: 'roleSalary',
        message: `What is the salary of the new role?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `A role salary is needed in order to continue.`
            }
        }
    },
    {
        when: (answers) => answers.action == 'add a role',
        type: 'input',
        name: 'roleDepartment',
        message: `In what department will your new role be?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `A role department is needed in order to continue.`
            }
        }
    },
    {
        when: (answers) => answers.action == 'add an employee',
        type: 'input',
        name: 'employeeFirstName',
        message: `Congratulations on your new hire! What is the first name of your new employee?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `I need the name of the lucky one to continue.`
            }
        }
    }, 
    {
        when: (answers) => answers.action == 'add an employee',
        type: 'input',
        name: 'employeeLastName',
        message: `What is the last name of your new employee?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `I need the name of the lucky one to continue.`
            }
        }
    }, 
    {
        when: (answers) => answers.action == 'add an employee',
        type: 'input',
        name: 'employeeRole',
        message: `What is the role of your new employee?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `I need yo know the role of your new employee to proceed.`
            }
        }
    },   
    {
        when: (answers) => answers.action == 'add an employee',
        type: 'input',
        name: 'employeeManager',
        message: `Who will be your new employee's manager?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `I need to have their manager name in order to continue.`
            }
        }
    },
    {
        when: (answers) => answers.action == 'update an employee role',
        type: 'number',
        name: 'employeeId',
        message: `What is the company ID number of the employee you want to relocate?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `I need to have your employee's company ID number in order to continue.`
            }
        }
    },  
    {
        when: (answers) => answers.action == 'update an employee role',
        type: 'input',
        name: 'employeeNewRole',
        message: `What will be your employee's new role?`,
        validate: (value) => {
            if(value) {
                return true
            } else {
                return `I need to have your employee's new role in order to continue.`
            }
        }
    },     
])
.then((answers) => {
    
})

