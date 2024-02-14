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
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
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
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
	}
}
const p1 = new Person("Alice",25);
// p1.greet();
const emp1 = new Employee("Bob","30","Manager");
// emp1.jobGreet();
emp1.greet();;
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
