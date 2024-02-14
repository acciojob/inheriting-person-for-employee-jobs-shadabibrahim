
// class Person {
// 	constructor(name,age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	greet(){
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. `)
// 	}
// }
// class Employee extends Person{
// 	constructor(name,age,jobTitle) {
// 		super();
// 		this.name = name;
// 		this.age = age;
// 		this.jobTitle = jobTitle;
		
// 	}
// 	jobGreet(){
// 		    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// 	}
// }
// // const alice = new Person("Alice",25);
// alice.greet();
// const bob = new Employee("Bob","30","Manager");
// bob.greet();
// bob.jobGreet();
// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() { //method using prototype
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);// prototype of person is inherited into employee
Employee.prototype.constructor = Employee; //get constructor of employee

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;