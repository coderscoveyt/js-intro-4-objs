// Instantiating object
const obj = {
  // properties
  name: "John",
  email: "john@doe.com",
  // method
  changeEmail(newEmail) {
    // this refers to the instance of the object
    this.email = newEmail;
  }
};

// Accessing props [arr]
// console.log(obj["name"]);
// console.log("\n");
// console.log(obj["email"]);

// Accessing props [dot notation]
// console.log(obj.name);
// console.log("\n");
// console.log(obj.email);

// Calling methods to mutate the properties
// console.log("EMAIL BEFORE: ", obj.email);
// obj.changeEmail("some new string");
// console.log("EMAIL AFTER: ", obj.email);

const address = {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  geo: {
    lat: "-37.3159",
    lng: "81.1496"
  }
};

const keys = Object.keys(address);
const values = Object.values(address);
const entries = Object.entries(address)

// console.log("Key Val PAIRS", keys, values);

console.log(entries);