const personPrototype = {
  firstName: 'Ewerton',
  lastName: 'Igor',
  age: 20,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.firstName);
