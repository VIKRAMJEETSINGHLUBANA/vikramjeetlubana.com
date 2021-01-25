const javaHeading = document.querySelector("#javaHeading"); 
const javascriptHeading = document.querySelector("#javascriptHeading"); 
const htmlHeading = document.querySelector("#htmlHeading"); 
const algorithmHeading = document.querySelector("#algorithmHeading"); 
const othersHeading = document.querySelector("#othersHeading"); 

const java = document.querySelectorAll(".java");
const javascript = document.querySelectorAll(".javascript");
const html = document.querySelectorAll(".html");
const algorithm = document.querySelectorAll(".algorithm");
const others = document.querySelectorAll(".others");
const allCertificateSections = document.querySelectorAll(".certificate");

function closeService(){
    for(let i=0; i < allCertificateSections.length;i++){
        allCertificateSections[i].style.display = "none";
    }
}
console.log(allCertificateSections);
function displayJava(){
    for (let i = 0; i < java.length; i++){
        java[i].style.display = "block";
    }
}
function displayJavascript(){
    for (let i = 0; i < javascript.length; i++){
        javascript[i].style.display = "block";
    }
}
function displayHtml(){
    for (let i = 0; i < html.length; i++){
        html[i].style.display = "block";
    }
}
function displayAlgorithm(){
    for (let i = 0; i < algorithm.length; i++){
        algorithm[i].style.display = "block";
    }
}
function displayOthers(){
    for (let i = 0; i < others.length; i++){
        others[i].style.display = "block";
    }
}
closeService();
displayJava();

javaHeading.addEventListener("click", closeService, false);
javascriptHeading.addEventListener("click", closeService, false);
htmlHeading.addEventListener("click", closeService, false);
algorithmHeading.addEventListener("click", closeService, false);
othersHeading.addEventListener("click", closeService, false);

javaHeading.addEventListener("click", displayJava, false);
javascriptHeading.addEventListener("click", displayJavascript, false);
htmlHeading.addEventListener("click", displayHtml, false);
algorithmHeading.addEventListener("click", displayAlgorithm, false);
othersHeading.addEventListener("click", displayOthers, false);