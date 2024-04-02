let a = { title: "test" };

console.log(a.__proto__ == Object.prototype);
console.log(a.__proto__ == a.constructor.prototype);

let b = Object.create(a);

console.log(b.__proto__ == a);
console.log(b.__proto__.__proto__ == Object.prototype);

let c = Object.create(null);

console.log(c.__proto__);
