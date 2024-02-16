// Challenge 1.1:
const studentProfile = {
    studentName: "Motheesh A R",
    studentAge: 23,
    cohortName: "PJLI - HD1",
    location: "Nagari A.P",
    hobbies: ["Reading", "Gaming"]
};

// Populate Challenge 1.1 Output
document.getElementById("challenge1_output").textContent = `
    Student Name: ${studentProfile.studentName},
    Student Age: ${studentProfile.studentAge},
    Cohort Name: ${studentProfile.cohortName},
    Location: ${studentProfile.location},
    Hobbies: ${studentProfile.hobbies.join(", ")}
    
`;
console.log(studentProfile.studentName);

// Challenge 1.2:
document.getElementById("challenge2_output").textContent = "Student Name: " + studentProfile.studentName;

// Challenge 1.3:
document.getElementById("challenge3_output").textContent = "Cohort Name: " + studentProfile["cohortName"];

// Challenge 2.1:
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const myBook = new Book("Profile", "Motheesh A R");

// Challenge 2.2:
document.getElementById("challenge4_output").textContent = "Book Title: " + myBook.title + ", Author: " + myBook.author;

console.log(myBook.title);