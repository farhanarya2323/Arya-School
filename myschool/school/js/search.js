let students = loadStudents();

document.getElementById("searchBox").addEventListener("input", function () {
    let q = this.value.toLowerCase();
    let results = students.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
    );

    let box = document.getElementById("results");
    box.innerHTML = "";

    results.forEach(s => {
        box.innerHTML += `<p><b>${s.id}</b> - ${s.name} (Class ${s.class})</p>`;
    });
});
