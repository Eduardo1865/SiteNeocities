
function calcResposta(){
    let bolaTextBox = document.getElementById("bolaTextBox").value;
    const resposta = document.getElementById("resposta");
    
    value = bolaTextBox.length;
    value = String(value).slice(-1);

    switch(value){
        case "0":
            resposta.innerHTML = `<p class="textoResposta">Não</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "1":
            resposta.innerHTML = `<p class="textoResposta">Sim</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "2":
            resposta.innerHTML = `<p class="textoResposta">Absolutamente não</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "3":
            resposta.innerHTML = `<p class="textoResposta">Talvez</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "4":
            resposta.innerHTML = `<p class="textoResposta">Com certeza</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "5":
            resposta.innerHTML = `<p class="textoResposta">Acho que não</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "6":
            resposta.innerHTML = `<p class="textoResposta">Sla</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "7":
            resposta.innerHTML = `<p class="textoResposta">Segredo</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "8":
            resposta.innerHTML = `<p class="textoResposta">Não XD</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
        case "9":
            resposta.innerHTML = `<p class="textoResposta">Sim :)</p>`;
            document.getElementById("bolaTextBox").value = "";
            break;
    }
    
}