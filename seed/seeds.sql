USE my_company;

INSERT INTO department 
       (name)
VALUES ('Chief Officers'),
       ('Marketing'),
       ('Engineering'),
       ('Finance'),
       ('Sales');

INSERT INTO role 
       (title, salary, department_id)
VALUES ('CEO', 3500000, 1),
       ('CFO', 1850000, 1),
       ('CTO', 2500000, 1),
       ('Marketing Manager', 250000, 2),
       ('Marketing Analyst', 100000, 2),
       ('Senior Developer', 350000, 3),
       ('Junior Developer', 98000, 3),
       ('Financial Analyst', 120000, 4),
       ('Accountant', 135000, 4),
       ('Salesman', 90000, 5);

INSERT INTO employee 
       (first_name, last_name, role_id, manager_id)
VALUES ('Mikel', 'Arteta', 1, NULL ),
       ('Arsene', 'Wenger', 2, NULL),
       ('Thierry', 'Henry', 3, NULL),
       ('Declan', 'Rice', 4, 1),
       ('Ben', 'White', 5, 4),
       ('Aaron', 'Ramsdale', 6, 3),
       ('Matt', 'Turner', 7, 6),
       ('Will', 'Saliba', 8, 2),
       ('Willy', 'Caballero', 8, 2),
       ('Andres', 'Iniesta', 9, 2),
       ('Alexis', 'Sanches', 10, 1);