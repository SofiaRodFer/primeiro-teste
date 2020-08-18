function raiocirc() {

    var raio = document.getElementById("raio").value;
    var raiovalor = (raio * raio * 3.14)
    document.getElementById("respostaraio").innerHTML = "Área: " + raiovalor;

}

function volcirc() {
    var raiovol = document.getElementById("raio").value;
    var altura = document.getElementById("altura").value;
    var volumevalor = (raiovol * raiovol * 3,14 * altura)
    document.getElementById("respostavolume").innerHTML = "Volume: " + volumevalor;

}


