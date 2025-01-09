function detectAnagram(s, t) {
  // Implementation
  const map1 = new Map();
  s.split("").forEach((i) => {
    if (map1.get(i)) {
      const count = map1.get(i);
      map1.set(i, count + 1);
    } else {
      map1.set(i, 1);
    }
  });

  const map2 = new Map();
  t.split("").forEach((i) => {
    if (map2.get(i)) {
      const count = map2.get(i);
      map2.set(i, count + 1);
    } else {
      map2.set(i, 1);
    }
  });

  let condition = true;

  map1.forEach((value, key) => {
    const value2 = map2.get(key);
    if (value2 === value) {
      condition = condition && true;
    } else {
      condition = condition && false;
    }
  });

  return condition;
}

console.log(detectAnagram("heart", "earth")); // true
