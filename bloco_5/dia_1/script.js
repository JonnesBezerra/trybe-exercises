let header = document.getElementById("header-container");
header.style.background = "green";
let urgente = document.getElementsByTagName("section");
urgente[0].style.background = "salmon";
urgente[1].style.background = "rgb(255, 255, 100)";
let urg = document.querySelectorAll(".emergency-tasks div h3");
urg[0].style.background = "purple";
urg[1].style.background = "purple";
let noUrg = document.querySelectorAll(".no-emergency-tasks div h3");
noUrg[0].style.background = "darkslategray";
noUrg[1].style.background = "darkslategray";
let foot = document.getElementById("footer-container");
foot.style.backgroundColor = "darkgreen";