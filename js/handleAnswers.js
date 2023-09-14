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
       db.query(`SELECT department_id AS ID, department_name AS Department FROM department` , (err, [result]) => {
        if(err) {
            console.error("Error:" + err);            
        }
        console.log(' ') // adds a new line between the qestion and the table. This is just for aesthetical reasons.
        console.table(result);
        console.log(' ') // adds a new line between the qestion and the table. This is just for aesthetical reasons.
       }) 
    };

    // join department on role.department_id = department.department_id
    if (action == 'view all roles') {

        db.query(`SELECT role_id, role_title, role_salary, department_id from role` , (err, [result]) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(' ') // adds a new line between the qestion and the table. This is just for aesthetical reasons.
            console.table(result);
            console.log(' ') // adds a new line between the qestion and the table. This is just for aesthetical reasons.
           })
    };

    if (action == 'view all employees') {

        db.query(`SELECT * FROM employee join role on employee.role_id = role.role_id` , (err, [result]) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log(' ') // adds a new line between the qestion and the table. This is just for aesthetical reasons.
            console.table(result);
            console.log(' ') // adds a new line between the qestion and the table. This is just for aesthetical reasons.
           })
    };

    if (action == 'add a department') {
        db.query(`INSERT INTO department (department_name) VALUES (?)`, departmentName, (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log("Department added");
        })
    };

    if (action == 'add a role') {
        db.query(`INSERT INTO role (role_title, role_salary, department_id) VALUES (?,?,?)`, [roleName, roleSalary, roleDepartment], (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log("Role added");
        })
    };

    if (action == 'add an employee') {
        db.query(`INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id) VALUES (?,?,?,?)`, [employeeFirstName, employeeLastName, employeeRole, employeeManager], (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log('Employee added');
        })
    };

    if (action == 'update an employee role') {
        db.query(`UPDATE employee SET role_id=? WHERE employee_id=?`, [employeeNewRole, employeeId], (err, result) => {
            if(err) {
                console.error("Error:" + err);
            }
            console.log('Employee relocated');
        })
    };
}

module.exports = handleAnswers;