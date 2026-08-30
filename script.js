function calculateGrade() {

    let mark = document.getElementById("mark").value;

    let grade;
    let status;

    if (mark >= 80) {
        grade = "A";
        status = "Pass";
    } 
    else if (mark >= 70) {
        grade = "B";
        status = "Pass";
    } 
    else if (mark >= 60) {
        grade = "C";
        status = "Pass";
    } 
    else if (mark >= 50) {
        grade = "D";
        status = "Pass";
    } 
    else {
        grade = "F";
        status = "Fail";
    }

    document.getElementById("result").textContent =
        "Grade: " + grade + " | Status: " + status;
}