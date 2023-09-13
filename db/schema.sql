DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL(9,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(department_id)
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_firstName VARCHAR(30) NOT NULL,
    employee_lastName VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(role_id)
);