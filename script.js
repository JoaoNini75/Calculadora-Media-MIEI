const btn = document.querySelector("#btn");
const inputs = document.querySelectorAll("input");
let validGrades = true;

let clickCounter = totalECTS = totalGrades = 0;

let s1ECTS = s2ECTS = s3ECTS = s4ECTS = s5ECTS = s6ECTS = 0;

let s1Grades = s2Grades = s3Grades = s4Grades = s5Grades = s6Grades = 0;

let y1ECTS = y2ECTS = y3ECTS = 0;

let y1Grades = y2Grades = y3Grades = 0;

let iECTS = mECTS = ccECTS = chsECTS = 0;

let iGrades = mGrades = ccGrades = chsGrades = 0;

let eecAverage = fAverage = 0;


function checkRepeat(id) {
    if (clickCounter > 0 && document.getElementById(id)) 
        document.getElementById(id).remove();
}

function checkRepeatAll() {
    const elems = document.querySelectorAll("h5");
    if (elems)
        for (i = 0; i < elems.length; i++)
            elems[i].remove();
}

function averageHandling(grades, ECTS, elem, text, id) {
    let average = grades / ECTS;
    elem.innerText = text + parseFloat(average).toFixed(3);
    elem.setAttribute("id", id);  
    document.body.append(elem);
}

function averageHandlingSimple(average, elem, text, id) {
    elem.innerText = text + parseFloat(average).toFixed(3);
    elem.setAttribute("id", id);  
    document.body.append(elem);
}


btn.addEventListener("click", () => {

    totalECTS = totalGrades = 0;
    s1ECTS = s2ECTS = s3ECTS = s4ECTS = s5ECTS = s6ECTS = 0;
    s1Grades = s2Grades = s3Grades = s4Grades = s5Grades = s6Grades = 0;
    y1ECTS = y2ECTS = y3ECTS = 0;
    y1Grades = y2Grades = y3Grades = 0;
    iECTS = mECTS = ccECTS = chsECTS = 0;
    iGrades = mGrades = ccGrades = chsGrades = 0;
    eecAverage = fAverage = 0;
    validGrades = true;

    for (i = 0; i < inputs.length; i++) {

        if (inputs[i].value && (inputs[i].value < 10 || inputs[i].value > 20)) {
            alert("As notas válidas variam entre 10 e 20. Corrija os campos que não cumprem este critério.");
            validGrades = false;
            break;
        }

        if (inputs[i].value) {
            totalGrades += inputs[i].value * inputs[i].getAttribute("ects");
            totalECTS += parseInt(inputs[i].getAttribute("ects"));

            switch (inputs[i].getAttribute("semester")) {
                case "1":
                    s1Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    s1ECTS += parseInt(inputs[i].getAttribute("ects"));
                    y1Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y1ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;

                case "1.5":
                    y1Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y1ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;

                case "2":
                    s2Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    s2ECTS += parseInt(inputs[i].getAttribute("ects"));
                    y1Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y1ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break; 

                case "3":
                    s3Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    s3ECTS += parseInt(inputs[i].getAttribute("ects"));
                    y2Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y2ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;

                case "3.5":
                    y2Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y2ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;    

                case "4":
                    s4Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    s4ECTS += parseInt(inputs[i].getAttribute("ects"));
                    y2Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y2ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;

                case "5":
                    s5Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    s5ECTS += parseInt(inputs[i].getAttribute("ects"));
                    y3Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y3ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;

                case "5.5":
                    y3Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y3ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;  

                case "6":
                    s6Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    s6ECTS += parseInt(inputs[i].getAttribute("ects"));
                    y3Grades += inputs[i].value * inputs[i].getAttribute("ects");
                    y3ECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;
            }

            switch (inputs[i].getAttribute("area")) {
                case "i":
                    iGrades += inputs[i].value * inputs[i].getAttribute("ects");
                    iECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;

                case "m":
                    mGrades += inputs[i].value * inputs[i].getAttribute("ects");
                    mECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;
                                     
                case "cc":
                    ccGrades += inputs[i].value * inputs[i].getAttribute("ects");
                    ccECTS += parseInt(inputs[i].getAttribute("ects"));
                    break;

                case "chs":
                    chsGrades += inputs[i].value * inputs[i].getAttribute("ects");
                    chsECTS += parseInt(inputs[i].getAttribute("ects"));
                    break; 

                case "eec":
                    eecAverage = inputs[i].value;
                    break;

                case "f":  
                    fAverage = inputs[i].value;
                    break;  
            }

        }       

    }   

    let totalAverage = totalGrades / totalECTS;

    if (validGrades) {
        if (isNaN(totalAverage)) 
            alert("Os campos relativos às notas não podem estar todos vazios.");
        else {
            if (clickCounter == 0) 
                alert("Faz scroll para baixo para visualizares os resultados.");


            checkRepeatAll();         
   

            const tah5 = document.createElement("h5");
            const underline = document.createElement("u");
            underline.innerText = "Média total: " + parseFloat(totalAverage).toFixed(3);
            tah5.append(underline);  
            tah5.setAttribute("id", "tah5");

            if (!(isNaN(totalAverage)))
                document.body.append(tah5); 


            if (y1Grades != 0 || y2Grades != 0 || y3Grades != 0)
                document.body.append(document.createElement("br"));


            if (y1Grades != 0) { 
                const y1ah5 = document.createElement("h5");    
                averageHandling(y1Grades, y1ECTS, y1ah5, "Média 1º ano: ", "y1ah5");
            }
                
            if (y2Grades != 0) {
                const y2ah5 = document.createElement("h5");
                averageHandling(y2Grades, y2ECTS, y2ah5, "Média 2º ano: ", "y2ah5");
            }
                
            if (y3Grades != 0) {
                const y3ah5 = document.createElement("h5");
                averageHandling(y3Grades, y3ECTS, y3ah5, "Média 3º ano: ", "y3ah5");
            }      


            if (s1Grades != 0 || s2Grades != 0 || s3Grades != 0 || s4Grades != 0 || s5Grades != 0 || s6Grades != 0)
                document.body.append(document.createElement("br"));

            
            if (s1Grades != 0) {
                const s1ah5 = document.createElement("h5");
                averageHandling(s1Grades, s1ECTS, s1ah5, "Média 1º semestre: ", "s1ah5");
            }
                
            if (s2Grades != 0) {
                const s2ah5 = document.createElement("h5");
                averageHandling(s2Grades, s2ECTS, s2ah5, "Média 2º semestre: ", "s2ah5");
            }   
                
            if (s3Grades != 0) {
                const s3ah5 = document.createElement("h5");
                averageHandling(s3Grades, s3ECTS, s3ah5, "Média 3º semestre: ", "s3ah5");
            }
                
            if (s4Grades != 0) {
                const s4ah5 = document.createElement("h5");
                averageHandling(s4Grades, s4ECTS, s4ah5, "Média 4º semestre: ", "s4ah5");
            }
                
            if (s5Grades != 0) {
                const s5ah5 = document.createElement("h5");
                averageHandling(s5Grades, s5ECTS, s5ah5, "Média 5º semestre: ", "s5ah5");
            }
                
            if (s6Grades != 0) {
                const s6ah5 = document.createElement("h5");
                averageHandling(s6Grades, s6ECTS, s6ah5, "Média 6º semestre: ", "s6ah5");
            }
                
            
            if (iGrades != 0 || mGrades != 0 || ccGrades != 0 || chsGrades != 0 || eecAverage != 0 || fAverage != 0)
                document.body.append(document.createElement("br"));
            

            if (iGrades != 0) {
                const iah5 = document.createElement("h5");
                averageHandling(iGrades, iECTS, iah5, "Média Informática: ", "iah5");
            }  
            
            if (mGrades != 0) {
                const mah5 = document.createElement("h5");
                averageHandling(mGrades, mECTS, mah5, "Média Matemática: ", "mah5");
            }

            if (ccGrades != 0) {
                const ccah5 = document.createElement("h5");
                averageHandling(ccGrades, ccECTS, ccah5, "Média Competências Complementares: ", "ccah5");
            }

            if (chsGrades != 0) {
                const chsah5 = document.createElement("h5");
                averageHandling(chsGrades, chsECTS, chsah5, "Média Ciências Humanas e Sociais: ", "chsah5");
            }

            if (eecAverage != 0) {
                const eecah5 = document.createElement("h5");
                averageHandlingSimple(eecAverage, eecah5, "Média Engenharia Eletrotécnica e de Computadores: ", "eecah5");
            }

            if (fAverage != 0) {
                const fah5 = document.createElement("h5");
                averageHandlingSimple(fAverage, fah5, "Média Física: ", "fah5");
            }

            clickCounter++;
        }       
    } 

})