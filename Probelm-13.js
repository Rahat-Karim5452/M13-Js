// Problem 13: Loop Through an Object's Properties
/* 
Object-structure:
Students{
    name:Abul;
    id:2019;
}
 */
let monitor = {
  color: "Black",
  brand: "lg",
  display: "something",
  size: "something",
};

//Way 1 : Using for in Loop
for (let key in monitor) {
  console.log(key, ": ", monitor[key]);
}

// Way 2: Using keys method
let objKeys = Object.keys(monitor);
console.log(objKeys);
for (let i = 0; i < objKeys.length; i++) {
  let key = objKeys[i];
  console.log(key, ": ", monitor[key]);
}

//Way 3: Using Key of
for (let key of objKeys) {
  console.log(key, ": ", monitor[key]);
}
