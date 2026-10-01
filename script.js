// Basic Functions

// function hello() {
//     console.log("Hello Everyone")
// }
// hello();

// function welcome() {
//     console.log("Welcome to JavaScript")
// }
// welcome();

// function navi() {
//     console.log("Nirmal Dass S")
// }
// navi();

// function message() {
//     console.log("Good Morning");
//     console.log("Have a nice day");
//     console.log("Welcome to JavaScript");
// }
// message();

// function numbers() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }
// numbers();

// function check() {
//     let age = 20;

//     if (age >= 18) {
//         console.log("You are eligible");
//     }
// }
// check();

// function company() {
//     console.log("Stackly");
// }
// company();

// function welcomeUser() {
//     console.log("Welcome User");
// }
// welcomeUser();
// welcomeUser();
// welcomeUser();

// function firstFunction() {
//     console.log("This is the first function");
// }
// function secondFunction() {
//     console.log("This is the second function");
// }
// firstFunction();
// secondFunction();



// Parameters & Arguments

// function display(name) {
//     console.log(name);
// }
// display("Nirmal");

// function display(name, age) {
//     console.log(name);
//     console.log(age);
// }
// display("Nirmal", 28);

// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 20);

// function sub(a, b) {
//     console.log(a - b);
// }
// sub(20, 10);

// function multiply(a, b) {
//     console.log(a * b);
// }
// multiply(10, 5);

// function divide(a, b) {
//     console.log(a / b);
// }
// divide(20, 5);

// function student(name, age) {
//     console.log("Student Name: " + name);
//     console.log("Student Age: " + age);
// }
// student("Nirmal", 28);

// function employee(name, role, salary) {
//     console.log("Employee Name: " + name);
//     console.log("Employee Role: " + role);
//     console.log("Employee Salary: " + salary);
// }
// employee("Nirmal", "Software Engineer", 425000);

// function details(name, age, city, role) {
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("City: " + city);
//     console.log("Role: " + role);
// }
// details("Nirmal", 28, "Coimbatore", "Software Engineer");

// function person(name, age, city, qualification, role, experience) {
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("City: " + city);
//     console.log("Qualification: " + qualification);
//     console.log("Role: " + role);
//     console.log("Experience: " + experience);
// }
// person(
//     "Nirmal",
//     28,
//     "Coimbatore",
//     "M.Sc Mathematics",
//     "Software Engineer",
//     3
// );



// Default Parameters

// function student(name, department = "Computer Science", cgpa) {
//     console.log("Name: " + name);
//     console.log("Department: " + department);
//     console.log("CGPA: " + cgpa);
// }
// student("Nirmal", undefined, 8.5);

// function user(name, age=18){
//     console.log(`Name is ${name} and age is ${age}`)
// }
// user("Nirmal", undefined)

// function employee(name, role = "Developer"){
//     console.log(`Name is ${name} and his role is ${role}`)
// }
// employee("Nirmal", undefined)

// function form(name, department, cgpa, disability = "no"){
//     console.log(`My name is ${name} and i'm studying in ${department} and my current CGPA is ${cgpa} and my disability status is ${disability}`)
// }
// form("Nirmal", "Maths", "8.5")
// form("Dass", "IT", "8.9", "yes")

// function details(name, age, city = "Coimbatore") {
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("City: " + city);
// }
// details("Nirmal", 28);



// Return

// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);

// function sub(a, b) {
//     return a - b;
// }
// let result = sub(20, 10);
// console.log(result);

// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(10, 5);
// console.log(result);

// function divide(a, b) {
//     return a / b;
// }
// let result = divide(20, 5);
// console.log(result);

// function salary() {
//     return 40000;
// }
// let mySalary = salary();
// console.log(mySalary);

// function employeeSalary(salary) {
//     return salary;
// }
// let result = employeeSalary(50000);
// console.log(result);

// function personName() {
//     return "Nirmal";
// }
// let name = personName();
// console.log(name);

// function checkResult(marks) {
//     if (marks >= 35) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }
// let result = checkResult(75);
// console.log(result);

// function getDiscount(price, discount) {
//     return discount;
// }
// let result = getDiscount(1000, 100);
// console.log(result);

// function add(a, b) {
//     return a + b;
// }
// function displayResult() {
//     let result = add(10, 20);
//     console.log("Result: " + result);
// }
// displayResult();/



// Outer Scope

// let name = "Nirmal";
// function displayName() {
//     console.log(name);
// }
// displayName();

// let employee = {
//     name: "Nirmal",
//     designation: "Software Engineer"
// };
// function displayEmployee() {
//     console.log(employee.name);
//     console.log(employee.designation);
// }
// displayEmployee();

// let salary = 40000;
// function calculateSalary() {
//     let bonus = 5000;
//     let totalSalary = salary + bonus;
//     console.log(totalSalary);
// }
// calculateSalary();

// let employee = {
//     name: "Nirmal",
//     age: 28,
//     role: "Software Engineer",
//     salary: 40000
// };
// function displayDetails() {
//     console.log("Name: " + employee.name);
//     console.log("Age: " + employee.age);
//     console.log("Role: " + employee.role);
//     console.log("Salary: " + employee.salary);
// }
// displayDetails();

// let message = "Hello JavaScript";
// function firstFunction() {
//     console.log(message);
// }
// function secondFunction() {
//     console.log(message);
// }
// firstFunction();
// secondFunction();



// Named, Anonymous & Arrow Functions

// function display(name) {
//     console.log(name);
// }
// display("Nirmal");

// let display = function(name) {
//     console.log(name);
// };
// display("Nirmal");

// let display = (name) => {
//     console.log(name);
// };
// display("Nirmal");

// let add = (a, b) => {
//     return a + b;
// };
// let result = add(10, 20);
// console.log(result);

// function addNamed(a, b) {
//     return a + b;
// }
// console.log(addNamed(10, 20));
// let addAnonymous = function(a, b) {
//     return a + b;
// };
// console.log(addAnonymous(10, 20));
// let addArrow = (a, b) => {
//     return a + b;
// };
// console.log(addArrow(10, 20));



// IIFE

// (function() {
//     console.log("Hello JavaScript");
// })();

// (function(name) {
//     console.log("Hello " + name);
// })("Nirmal");

// (function(product, discount) {
//     console.log("Special Offer!");
//     console.log("Product: " + product);
//     console.log("Discount: " + discount + "%");
// })("Laptop", 20);



// Callback & Higher-Order Functions

// function add(callback, a, b) {
//     let result = a + b;
//     console.log("Addition: " + result);
//     callback(a, b);
// }
// function display(a, b) {
//     console.log("Numbers received: " + a + ", " + b);
// }
// add(display, 10, 20);

// function add(callback, a, b) {
//     let result = a + b;
//     console.log("Addition: " + result);
//     callback(a, b);
// }
// function sub(a, b) {
//     let result = a - b;
//     console.log("Subtraction: " + result);
// }
// add(sub, 20, 10);