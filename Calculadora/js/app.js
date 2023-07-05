console.log("calulator")

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "resultado: " + "error";
    }
    else{
        document.getElementById("resultado").innerHTML = "resultado: " + resultado;
    }
    
    
}