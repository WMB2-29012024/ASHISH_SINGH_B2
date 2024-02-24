// Add another key “objectDataTypes” to the same object using square notation, and value should be an array of strings containing names of all object data types in JS, then log the object

let jsData = {
    dataTypes: ["String", "Number", "Boolean", "Null", "Undefined", "Object", "Symbol", "BigInt"],
    objectDataTypes: ["Object", "Function", "Array", "Date", "RegExp", "Map", "Set", "WeakMap", "WeakSet"]
  };
  
  console.log(jsData.objectDataTypes);
  