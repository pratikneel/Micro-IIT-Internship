document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let studentName = document.getElementById('studentName').value;
    let studentAge = document.getElementById('studentAge').value;
    let studentCourse = document.getElementById('studentCourse').value;

    if (studentName && studentAge && studentCourse) {
        addStudent(studentName, studentAge, studentCourse);
        document.getElementById('studentForm').reset();
    } else {
        alert("Please fill in all fields");
    }
});

function addStudent(name, age, course) {
    const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

    const newRow = studentTable.insertRow(studentTable.rows.length);

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const courseCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    nameCell.textContent = name;
    ageCell.textContent = age;
    courseCell.textContent = course;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        deleteStudent(newRow);
    };
    actionCell.appendChild(deleteBtn);
}

function deleteStudent(row) {
    const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    studentTable.deleteRow(row.rowIndex - 1); // Removing the row from the table
}