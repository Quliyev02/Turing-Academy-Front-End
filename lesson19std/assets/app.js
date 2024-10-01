function Student(name, subject, grade = 0) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;

    this.study = function(hours) {
        this.grade += hours * 5;
        if (this.grade > 100) {
            this.grade = 100; // stucking grade at 100
        }
    };

    this.getGrade = function() {
        return this.grade;
    };

    this.changeSubject = function(newSubject) {
        this.subject = newSubject;
    };
}

// Creating students with the new keyword
let student1 = new Student('John Doe', 'Calculus');
let student2 = new Student('Jane Roe', 'Computer Architecture');
let student3 = new Student('Mark Zuckerberg', 'Automata Theory');

// update grade 
student1.study(3); 
student2.study(8);  
student3.study(34);  

// change subject
student1.changeSubject('Operating Systems');
student2.changeSubject('Discrete Math');
student3.changeSubject('Advanced Algorithms');

// testing results
console.log(student1.getGrade()); // op 15
console.log(student1.subject); // op operating systems

console.log(student2.getGrade()); // op 40
console.log(student2.subject); // op discrete math

console.log(student3.getGrade()); //op100 stucked at 100 cause the if statement
console.log(student3.subject) // op automata theory
