function Person(name, age) {
  this.name = name;
  this.age = age;
  this.target = new.target;
}

Person("ag", 12);

console.log(name, age, target);

const person = new Person("tb", 24);

console.log(person);
