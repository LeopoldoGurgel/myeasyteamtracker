const fs = require('fs');
const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });



const handleAnswers = (data) => {

    let action = data.action;
    let departmentName = data.departmentName;
    let roleName = data.roleName;
    let roleSalary = data.roleSalary;
    let roleDepartment = data.roleDepartment;
    let employeeFirstName = data.employeeFirstName;
    let employeeLastName = data.employeeLastName;
    let employeeRole = data.employeeRole;
    let employeeManager = data.employeeManager;
    let employeeId = data.employeeId;
    let employeeNewRole = data.employeeNewRole;

    if(action == 'view all departments') {
       db.query(`SELECT * FROM department` , (err, result) => {
        if(err) {
            console.error("Error:" + err);            
        }
        console.log(result);
       }) 
    };


    if (action == 'view all roles') {
        db.query(`SELECT * FROM role` , (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(result);
           })
    };

    if (action == 'view all employees') {
        db.query(`SELECT * FROM employee` , (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(result);
           })
    };

    if (action == 'add a department') {
        db.query(`INSERT INTO department (department_id) VALUE (${departmentName})`, (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(result);
        })
    };

    if (action == 'add a role') {
        db.query(`INSERT INTO role (role_title, role_salary, department_id) VALUES (${roleName}, ${roleSalary}, ${roleDepartment})`, (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(result);
        })
    };

    if (action == 'add an employee') {
        db.query(`INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id) VALUES (${employeeFirstName}, ${employeeLastName}, ${employeeRole}, ${employeeManager})`, (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(result);
        })
    };

    if (action == 'update an employee role') {
        db.query(`UPDATE employee SET role_id=${employeeNewRole} WHERE employee_id=${employeeId}`, (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(result);
        })
    };
}

module.exports = handleAnswers;