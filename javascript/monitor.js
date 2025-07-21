

function selectCaminho(){
    let monitorTextBox = document.getElementById("monitorTextBox").value;
    const caminhoImagem = document.getElementById("caminhoImagem");
    const caminhoNome = document.getElementById("caminhoNome");
    let value = "";
    

    monitorTextBox = monitorTextBox.toLowerCase();
    
    switch(monitorTextBox){
        case "esqueleto":
            value = monitorTextBox;
            caminhoImagem.innerHTML = `<img src="../images/${value}.gif" height=120px alt="caminho${value}" class="monitorImagem" >`;
            caminhoNome.innerHTML = `<a href="${value}.html" class="linkCaminho">/${value}/</a>`

            console.log(value);
            break;

        case "bola8":
            value = monitorTextBox;
            caminhoImagem.innerHTML = `<img src="../images/${value}.gif" height=120px alt="caminho${value}" class="monitorImagem" >`;
            caminhoNome.innerHTML = `<a href="${value}.html" class="linkCaminho">/${value}/</a>`

            console.log(value);
            break;
        
        default:
            console.log("nope")
            caminhoImagem.innerHTML = `<img src="../images/monitor.gif" height=120px class="monitorImagem" >`
            caminhoNome.innerHTML = `<a href="" class="linkCaminho">/escreva um caminho valido/</a>`
            break;
    }
}