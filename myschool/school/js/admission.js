document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let students = loadStudents();

    let newStudent = {
        id: generateID(),
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        phone: document.getElementById("phone").value
    };

    students.push(newStudent);
    saveStudents(students);

    document.getElementById("msg").innerText = "Student Added Successfully!";
    this.reset();
});
