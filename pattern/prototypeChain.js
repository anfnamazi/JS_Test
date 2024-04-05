class BrokenProtoChainArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const arr = new BrokenProtoChainArray("a", "b", "c", "d", "e", "f");
let mapped = arr.map((i) => i);

console.log(mapped.__proto__ == Array.prototype);
console.log(mapped.__proto__ == BrokenProtoChainArray.prototype);

class ProtoChainArray extends Array {}

const arr2 = new ProtoChainArray("a", "b", "c", "d", "e", "f");
let mapped2 = arr2.map((i) => i);

console.log(mapped2.__proto__ == Array.prototype);
console.log(mapped2.__proto__ == ProtoChainArray.prototype);
