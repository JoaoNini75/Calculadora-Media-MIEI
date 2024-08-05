const btn = document.querySelector("#btn");
const inputs = document.querySelectorAll("input");
const INPUT_LEN = inputs.length;
const INVALID_INPUT = "As notas válidas variam entre 10 e 20. Corrige os campos que não cumprem este critério.";

let semesterECTS, semesterGrades, yearECTS, yearGrades, areaECTS, areaGrades;
let totalGrades, totalECTS;


btn.addEventListener("click", calculate);

function calculate() {
    initalizeArrays();

    if (!isInputValid())
        alert(INVALID_INPUT);

    acumulateGradesAndECTS();
    printResultsConsole();
}

function printResultsConsole() {
    console.log("Semestres:");
    for (let i = 0; i < 10; i++)
        console.log(semesterGrades[i] / semesterECTS[i]);
    console.log("");

    console.log("Anos:");
    for (let i = 0; i < 5; i++)
        console.log(yearGrades[i] / yearECTS[i]);
    console.log("");

    console.log("Áreas:");
    for (let i = 0; i < 7; i++)
        console.log(areaIndexToName(i) + " " + areaGrades[i] / areaECTS[i]);
    console.log("");
}

function initalizeArrays() {
    semesterECTS = Array(10).fill(0);
    semesterGrades = Array(10).fill(0);
    yearECTS = Array(5).fill(0);
    yearGrades = Array(5).fill(0);
    areaECTS = Array(7).fill(0);
    areaGrades = Array(7).fill(0);
}

function isInputValid() {
    for (let i = 0; i < INPUT_LEN; i++)
        if (inputs[i].value && (inputs[i].value < 10 || inputs[i].value > 20))
            return false;

    return true;
}

function acumulateGradesAndECTS() {
    for (let i = 0; i < INPUT_LEN; i++) {
        if (!inputs[i].value) 
            continue;
        
        let ECTS = parseInt(inputs[i].getAttribute("ects"));
        let gradeTimesECTS = inputs[i].value * ECTS;

        totalGrades += gradeTimesECTS;
        totalECTS += ECTS;
        
        // contas por semestre
        let semester = inputs[i].getAttribute("semester");

        if (semester.charAt(1) != '.') { // trimestres so contam para as notas do ano e da area
            semesterECTS[parseInt(semester) - 1] += ECTS;
            semesterGrades[parseInt(semester) - 1] += gradeTimesECTS;
        }
            
        // contas por ano
        let year = parseInt((parseInt(semester) - 0.5) / 2);
        yearECTS[year] += ECTS;
        yearGrades[year] += gradeTimesECTS;

        // contas por area
        let areaIndex = areaNameToIndex(inputs[i].getAttribute("area"));
        areaECTS[areaIndex] += ECTS;
        areaGrades[areaIndex] += gradeTimesECTS;
    }
}

function areaNameToIndex(area) {
    switch (area) {
        case "i": return 0;
        case "m": return 1;
        case "eec": return 2;
        case "f": return 3;                 
        case "cc": return 4;
        case "chs": return 5;
        case "livre": return 6;
    }
}

function areaIndexToName(index) {
    switch (index) {
        case 0: return "i";
        case 1: return "m";
        case 2: return "eec";
        case 3: return "f";                 
        case 4: return "cc";
        case 5: return "chs";
        case 6: return "livre";
    }
}

