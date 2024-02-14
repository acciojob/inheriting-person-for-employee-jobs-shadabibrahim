// complete this js code
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.greet = function() {
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
// 	}
// }

// function Employee(name, age, jobTitle) {
	
// }
class Person {
	constructor(name,age) {
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. `)
	}
}
class Employee extends Person{
	constructor(name,age,jobTitle) {
		super();
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
		
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}. `)
	}
}
const alice = new Person("Alice",25);
alice.greet();
const bob = new Employee("Bob","30","Manager");
bob.greet();
bob.jobGreet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
