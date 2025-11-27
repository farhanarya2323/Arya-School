// Load students from localStorage
function loadStudents() {
    let data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
}

// Save to localStorage
function saveStudents(arr) {
    localStorage.setItem("students", JSON.stringify(arr));
}

// Auto ID generator
function generateID() {
    return "STU" + Math.floor(Math.random() * 100000);
}
