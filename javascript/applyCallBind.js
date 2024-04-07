const person = {
  name: "foo",
  age: 12,
  gender: "male",
};

function changePerson(name, age) {
  this.name = name;
  this.age = age;
  return this;
}

const aPerson = changePerson.apply(person, ["ali", 18]);
console.log(aPerson);

const cPerson = changePerson.call(person, "reza", 17);
console.log(cPerson);

const bPerson = changePerson.bind(person, "javad", 16);
console.log(bPerson());
