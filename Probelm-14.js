// Problem 14: You are given an object containing information about a student.

// ---- Tasks ----
// Print all keys.
// Print all values.
// Print each key-value pair.
// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Count the total number of properties in the object.
// Check if the object contains a property named "email".

//---- Expected input:
//  const student = {
//   name: "Utsho",
//   age: 25,
//   university: "DIU",
//   department: "CSE",
// };

// -----------------------------

//---- Expected output:
// name age university department

// Utsho 26 DIU CSE

// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Total Properties: 4
// Has Email: false

const student = {
  name: "Utsho",
  age: 25,
  university: "DIU",
  department: "CSE",
};
/* console.log("============ 1. Print all keys.===============");
for (let key in student) {
  console.log(key);
}
console.log("============ 2. Print all values.===============");
for (let key in student) { 
  console.log(student[key]);
}
console.log("==========Print each key-value pair.=================");
for (let key in student) {
  console.log(key, ": ", student[key]);
}

console.log(
  "==========Count the total number of properties in the object.==============",
);
let objkeyCount = Object.keys(student).length; //!Object.keys : Array toiri Kore.
console.log("Total Properties: ", objkeyCount);

console.log(
  "==========Check if the object contains a property named email .==============",
);
let hasEmailProperties = student.hasOwnProperty("email"); //!Important : hasOwnProperty.
{
  console.log("Has Email: ", hasEmailProperties);
} */

//For Function
function objOperation(obj) {
  for (let key in obj) {
    console.log(key);
  }

  for (let key in obj) {
    console.log(obj[key]);
  }

  for (let key in obj) {
    console.log(key, ": ", obj[key]);
  }

  let objKeyCount = Object.keys(obj).length; // ["name", "age", "university", "department"]
  console.log("Total Properties: ", objKeyCount);

  let hasEmailProperty = obj.hasOwnProperty("email");
  console.log("Has Email: ", hasEmailProperty);
}

objOperation(student);
