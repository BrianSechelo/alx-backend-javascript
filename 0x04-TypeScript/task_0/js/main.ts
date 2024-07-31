export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

  const student1: Student = {
  firstName: "Brian";
  lastName: "Sechelo";
  age: 32;
  location: "Karen";
  };

  const student2: Student = {
  firstName: "Bonface";
  lastName: "GItonga";
  age: 35;
  location: "Rongai";
  };

  const studentsList: Array<Student> = [
  student1,
  student2,
  ];

  export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headerRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headerRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.insertAdjacentElement('beforeend', headerRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
