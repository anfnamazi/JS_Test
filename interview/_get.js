function _get(obj, path, def = "def") {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    throw "input object not a oject or array";
  }

  if (Array.isArray(path)) {
    return getPathFromArr(obj, path, def);
  } else {
    path = path.replaceAll(/[^a-zA-Z0-9]/g, ",");
    let pathArr = path.split(",");
    pathArr = pathArr.filter((i) => i);

    return getPathFromArr(obj, pathArr, def);
  }
}

function getPathFromArr(obj, path, def) {
  let current = obj;
  for (let i of path) {
    if (current[i] === undefined) {
      return def;
    }
    current = current[i];
  }
  return current;
}

console.log(_get({ a: [{ b: { c: 3 } }, [{ d: 4 }]] }, ["a", "1", "0", "d"]));
console.log(_get({ a: [{ b: { c: 3 } }, [{ d: 4 }]] }, "a[1][0].d"));
console.log(_get({ a: [{ b: { c: 3 } }, [{ d: 4 }]] }, "a[10].b.c"));
console.log(_get({ a: [{ b: { c: 3 } }, [{ d: 4 }]] }, "a[1][1].f", "default"));
console.log(_get([{ a: 1 }], "[0].a"));
