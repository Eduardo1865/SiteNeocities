

function selectCaminho(){
    let monitorTextBox = document.getElementById("monitorTextBox").value;
    const caminhoImagem = document.getElementById("caminhoImagem");
    
    

    monitorTextBox = monitorTextBox.toLowerCase();
    
    switch(monitorTextBox){
        case "esqueleto":
            const value = monitorTextBox;
            caminhoImagem.innerHTML = `<img src="../images/${value}.gif" height=120px alt="caminho${value}" class="monitorImagem" >`;
            console.log(value);
            break;
        
        default:
            console.log("nope")
            caminhoImagem.innerHTML = `<img src="../images/monitor.gif" height=120px class="monitorImagem" >`
            break;
    }
}