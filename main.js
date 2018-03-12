var inicial = 0;
var resp1 = 0;
var resp2 = 1;

window.onload=function() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xhttp.open("GET", "main.xml", true);
    xhttp.send();

    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        
        document.getElementById("pregunta").innerHTML =
        xmlDoc.getElementsByTagName("question")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("imagen").src =
        xmlDoc.getElementsByTagName("imagen")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("respuesta1").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp1].childNodes[0].nodeValue;

        document.getElementById("respuesta2").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp2].childNodes[0].nodeValue;   
    }
}

function next() {
    inicial = inicial + 1;
    resp1 = resp1 + 2;
    resp2 = resp2 + 2;
    hi()
}

function hi() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xhttp.open("GET", "main.xml", true);
    xhttp.send();

    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        
        document.getElementById("pregunta").innerHTML =
        xmlDoc.getElementsByTagName("question")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("imagen").src =
        xmlDoc.getElementsByTagName("imagen")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("respuesta1").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp1].childNodes[0].nodeValue;

        document.getElementById("respuesta2").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp2].childNodes[0].nodeValue;   
    }
}