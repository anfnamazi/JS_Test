function Person(name, age) {
  this.name = name;
  this.age = age;
  this.target = new.target;
}

Person("ag", 12);
const person = new Person("tb", 24);

console.log(name, age, target);
console.log(person);
