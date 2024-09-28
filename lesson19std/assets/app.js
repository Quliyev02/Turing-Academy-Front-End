function Student(name, subject, grade = 0) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;

    this.study = function(hours) {
        this.grade += hours * 5;
    };

    this.getGrade = function() {
        return this.grade;
    };

    this.changeSubject = function(newSubject) {
        this.subject = newSubject;
    };
}

// creating student with new keyword
let student1 = new Student('Sam Altman', 'Calculus');

// uptading grade 
student1.study(3);

// changing subject
student1.changeSubject('Operating Systems');

// console log for display results
console.log(student1.getGrade()); // op 15
console.log(student1.subject); // op operating systems
