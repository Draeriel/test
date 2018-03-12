window.onload=function (){
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
      xmlDoc.getElementsByTagName("question")[0].childNodes[0].nodeValue;
      
      document.getElementById("imagen").src =
      xmlDoc.getElementsByTagName("imagen")[0].childNodes[0].nodeValue;
      
      document.getElementById("respuesta1").innerHTML =
      xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;

      document.getElementById("respuesta2").innerHTML =
      xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue;
     
  }
    }