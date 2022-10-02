class Person {
  constructor(nameInput, ageInput) {
    this.name = nameInput;
    this.age = ageInput;
  }

  welcome() {
    console.log(`Welcome ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(nameInput, teacherIdInput, ageInput) {
    super(nameInput, ageInput);
    this.teacherId = teacherIdInput;
  }
}

const mathsTeacher = new Teacher('Adam', 'MATH01', 30);

console.log(mathsTeacher);
mathsTeacher.welcome();
// const scienceTeacher = new Teacher('Joh', 'MATH01');

class Student extends Person {
  constructor(name, rollNumber) {
    super(name);
    this.rollNumber = rollNumber;
  }
}
const newStudent = new Student('Eve', '001');
console.log(newStudent);
newStudent.welcome();
