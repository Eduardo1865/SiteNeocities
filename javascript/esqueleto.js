
const audioEsqueleto = new Audio('../music/esqueleto.mp3');
const audioJumpscare = new Audio('../music/jumpscare.mp3');


function timer() {
    audioEsqueleto.play();
    let time = 20;
    const timerId = document.getElementById("timerId");
    const espacoEsqueleto = document.getElementById("espaço-esqueleto");

    let timer = setInterval(() => {
        time--;
        timerId.textContent = time;
        espacoEsqueleto.textContent = "ELE ESTÁ CHEGANDO";
        console.log(time);
        if (time <= 0) {
            clearInterval(timer);
            audioEsqueleto.pause();
            audioJumpscare.play();
            timerId.textContent = "";
            espacoEsqueleto.innerHTML = `<img src="../images/squeleto.gif" id="esqueleto" height=120px alt="squeleto">`;
        }
    }, 1000);
}


window.addEventListener("click", timer ,{once:true});