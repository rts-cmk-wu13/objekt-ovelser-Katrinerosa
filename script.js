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



// --- opgave 2 ---
// Udvidet objekt med forskellige datatyper
let userProfile = {
    firstName: "Katrine",
    lastName: "Rosa",
    age: 44,
    married: false, // Boolean værdi
    hobbies: ["Reading", "Drawing", "Coding"], // Array
    pet: { // Nestet objekt
        type: "Cat",
        name: "Sniffles",
        age: 3
    }
};

// Udskriv værdier fra arrayet (hobbies) med forEach
console.log("Hobbies:");
userProfile.hobbies.forEach(hobby => console.log(hobby)); // i stedet for "person.hobbies" så "userProfile.hobbies"

// Udskriv værdier fra det nestede objekt (pet)
console.log("Pet details:");
console.log("Type:", userProfile.pet.type); // Rettet fra "person.pet.type" til "userProfile.pet.type"
console.log("Name:", userProfile.pet.name);
console.log("Age:", userProfile.pet.age);


// --- Opgave 3: Studenterlister ---
// Studerende opdelt efter studieretning
const studentGroups = {
    "Web Development": [
        { name: "Emma", age: 36 },
        { name: "Anders", age: 24 }
    ],
    "Software Engineering": [
        { name: "Lars", age: 22 },
        { name: "Maja", age: 27 }
    ],
    "Graphic Design": [
        { name: "Sofie", age: 25 },
        { name: "Emil", age: 21 }
    ]
};

// Henter HTML-containeren
const studentsContainer = document.querySelector(".students-container");

// Gennemløber hver studieretning
Object.keys(studentGroups).forEach(subject => {
    // Opret en overskrift til studieretningen
    const subjectTitle = document.createElement("h3");
    subjectTitle.textContent = subject;
    studentsContainer.append(subjectTitle);

    // Opret en liste til de studerende
    const studentList = document.createElement("ul");

    // Gennemløber studerende i denne kategori
    studentGroups[subject].forEach(student => {
        const studentItem = document.createElement("li");
        studentItem.textContent = `${student.name}, Alder: ${student.age}`;
        studentList.append(studentItem);
    });

    // Tilføjer listen til containeren
    studentsContainer.append(studentList);
});
