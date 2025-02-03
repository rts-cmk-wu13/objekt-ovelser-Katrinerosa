// --- opgave 1 ---
// Opret et objekt med mindst fire egenskaber
let person = {
    firstName: "Katrine",
    lastName: "Rosa",
    age: 45,
    pet: "Cat"
};

// Udskriv egenskaber én ad gangen med dot notation
console.log("Dot notation:");
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Pet:", person.pet);

// Udskriv egenskaber én ad gangen med bracket notation
console.log("Bracket notation:");
console.log("First Name:", person["firstName"]);
console.log("Last Name:", person["lastName"]);
console.log("Age:", person["age"]);
console.log("Pet:", person["pet"]);
