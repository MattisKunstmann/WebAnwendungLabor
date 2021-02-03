function getCities(str) {
  
  let cities = {
  "BER": "berlin.txt",
  "KIE": "kiel.txt"};

  var xhttp;    
  if (str == "") {
    document.getElementById("txtOutput").innerHTML = "Sie haben keine Auswahl getroffen";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtOutput").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", cities[str], true);
  xhttp.send();
}