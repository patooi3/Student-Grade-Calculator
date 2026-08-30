function calculateGrade() {

    let mark = document.getElementById("mark").value;

    let grade;

    if (mark >= 80) {
        grade = "A";
    } 
    else if (mark >= 70) {
        grade = "B";
    } 
    else if (mark >= 60) {
        grade = "C";
    } 
    else if (mark >= 50) {
        grade = "D";
    } 
    else {
        grade = "F";
    }

    document.getElementById("result").textContent =
        "Your Grade is: " + grade;
}