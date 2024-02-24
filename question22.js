// Use the set method to add one more data type in the above map.set(“object”, “non-primitive”)

let nonPrimitiveDataTypes = new Map([
    ["Object", "non-primitive"],
    ["Function", "non-primitive"],
    ["Array", "non-primitive"],
    ["Date", "non-primitive"],
    ["RegExp", "non-primitive"],
    ["Map", "non-primitive"],
    ["Set", "non-primitive"],
    ["WeakMap", "non-primitive"],
    ["WeakSet", "non-primitive"]
  ]);
  nonPrimitiveDataTypes.set("Object", "non-primitive");

console.log(nonPrimitiveDataTypes);
  