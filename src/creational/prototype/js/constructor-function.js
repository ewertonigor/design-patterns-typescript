function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Ewerton',
  lastName: 'Igor',
  age: 20,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);

const person1 = new Person('Ewerton', 'Igor', 20);
console.log(person1.fullName());
