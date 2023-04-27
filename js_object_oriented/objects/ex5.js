function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          if (course.note) {
            course.note += '; ' + note;
          } else {
            course.note = note;
          }
        }
      });
    },

    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = note;
        }
      });
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },

  };
}

let school = {
  students: [],

  addStudent(name, year) {
    let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (validYears.includes(year)) {
      let newStudent = createStudent(name, year);
      this.students.push(newStudent);
      return newStudent;
    } else {
      console.log("Invalid Year");
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade(student, code, grade) {
    student.courses.forEach(course => {
      if (course.code === code) {
        course.grade = grade;
      }
    });
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      let grade;
      if (course.grade === undefined) {
        grade = "In progress";
      } else {
        grade = course.grade;
      }

      console.log(`${course.name}: ${grade}`);
    });
  },

  courseReport(courseName) {
    console.log(`=${courseName} Grades=`);

    let totalGrade = 0;
    let totalStudents = 0;
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.grade !== undefined) {
          console.log(student.name + ': ' + course.grade);
          totalGrade += course.grade;
          totalStudents += 1;
        }
      });
    });

    console.log('---');
    console.log(`Course Average: ${totalGrade / totalStudents}`);
  }
};

let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.enrollStudent(bar, 'Math', 101);
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
