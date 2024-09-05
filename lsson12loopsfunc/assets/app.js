let sentence = "Mən Turing Academydə Programing tədrisi alıram";

// Initialize a counter for letters
let count = 0;

// loop for check each char in sent
for (let char of sentence) {
  // checking for each char is letter
  if (char.match(/[a-zA-ZəƏıIöÖüÜçÇğĞşŞ]/)) {
    count++;
  }
}

// for result
console.log("In this sentence we have", count, "letters");



let students = [
    {id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95},
    {id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77},
    {id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98},
    {id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54},
    {id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100},
    {id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35},
    {id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95},
    {id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95},
    {id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100}
];

// 1. function forp print student names who has grade between 95-100
function printHighGradeNames(students) {
    console.log("Students with grades between 95-100:");
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 95 && students[i].grade <= 100) {
            console.log(students[i].name);
        }
    }
}

// 2. function for count students whose names are 5 characters or fewer
function countShortNames(students) {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.length <= 5) {
            count++;
        }
    }
    console.log("\nNumber of students whose names are 5 characters or fewer: " + count);
}

// 3. Function to print the name and surname who has the ID 8
function printStudentById(students, id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log("\nStudent with ID " + id + ": " + students[i].name + " " + students[i].surname);
            break; // for the when student found stop the loop
        }
    }
}

// for callin functions
printHighGradeNames(students);
countShortNames(students);
printStudentById(students, 8);

