let students = loadStudents();
let table = document.getElementById("studentTable");

students.forEach(s => {
    table.innerHTML += `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.class}</td>
            <td>${s.phone}</td>
        </tr>
    `;
});
