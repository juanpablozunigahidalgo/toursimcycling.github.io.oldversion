let docuw=150;
let docuv=0.2;
let equipment2;

equipment2= function () {
 var docuq;
 var dayslength = document.getElementById('triplenght').value;
 var campop = document.getElementById('camping').value;
 var rain = document.getElementById('rain').value;
 var tempmin = document.getElementById('mintemp').value;
 if (dayslength>=0){
       docuq=1;
       document.getElementById("docuhead").innerHTML = "Documents";
       document.getElementById("docucd").innerHTML = "Wallet";
       document.getElementById("docuq").innerHTML = docuq + " [unit]";
       document.getElementById("docutw").innerHTML = (docuq*docuw)/1000) + " [kg]";
       document.getElementById("docutv").innerHTML = (docuq*docuv) + " [lt]";
      } else {
       docuq=0;
       document.getElementById("docuhead").innerHTML = "";
       document.getElementById("docucd").innerHTML = "";
       document.getElementById("docuq").innerHTML = "";
       document.getElementById("docutw").innerHTML = "";
       document.getElementById("docutv").innerHTML = "";
      }
      output;
}

if (tempmin >= 10 ) {
  if (dayslength >= 4 ) {
    tshirtq = 4;
  } else if (dayslength >= 2) {
    tshirtq = 3;
  } else if (dayslength>=1) {
    tshirtq = 2;
  } else {
    tshirtq = 1;
  }
} else {
  if (dayslength >= 4 ) {
    tshirtq = 4;
  } else if (dayslength >= 2) {
    tshirtq = 3;
  } else if (dayslength>=1) {
    tshirtq = 2;
  } else {
    tshirtq = 1;
  }
};
