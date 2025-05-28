let total;

const totMaks = document.getElementById("final");
const percentage = document.getElementById("Percentage");
const grade = document.getElementById("Grade");
const marks1 = document.getElementById("mark1");
const marks2 = document.getElementById("mark2");
const marks3 = document.getElementById("mark3");
const marks4 = document.getElementById("mark4");
const marks5 = document.getElementById("mark5");
const marks6 = document.getElementById("mark6");
const button = document.querySelector("button");

function totalMarks() {
    total = 
        Number(marks1.value) + 
        Number(marks2.value) + 
        Number(marks3.value) + 
        Number(marks4.value) + 
        Number(marks5.value) + 
        Number(marks6.value);
    
    totMaks.innerText = "Total Marks: " + total;
}

function calculatePercentage() {
    let precen = (total / 600) * 100;
    percentage.innerText = "Percentage: " + precen.toFixed(2) + "%";
}

function calculateGrade() {
    let precen = (total / 600) * 100;

    if (precen >= 90) {
        grade.innerText = "Grade: A+";
    } else if (precen >= 80) {
        grade.innerText = "Grade: A";
    } else if (precen >= 70) {
        grade.innerText = "Grade: B";
    } else if (precen >= 60) {
        grade.innerText = "Grade: C";
    } else if (precen >= 50) {
        grade.innerText = "Grade: D";
    } else {
        grade.innerText = "Grade: F (Fail)";
    }
}

// Add event listener to button
button.addEventListener("click", function() {
    totalMarks();
    calculatePercentage();
    calculateGrade();
});
