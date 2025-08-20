const ImgTextbox = document.getElementById("ImgTextbox");
const slides = document.querySelectorAll(".slides img");
const titulo = document.getElementById("titulo");

let slideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get("slide");
    if (slideParam !== null && !isNaN(slideParam)) {
        slideIndex = parseInt(slideParam, 10);
    }
    initializeSlider();
});

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    }
    showText();
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

    showText();
    
}

function showText(){
    switch(slideIndex){
        case 0:
            titulo.innerHTML = `<h3>cachorro.webp<h3>`
            ImgTextbox.innerHTML = `Minha recriação da pintura do borzoi da capa da musica "If I Were" da Vashti Bunyan. Feito no Aseprite a 3 anos atrás.`;
            break;
        case 1:
            titulo.innerHTML = `<h3>me.jpg<h3>`
            ImgTextbox.innerHTML = `Eu`;
            break;
        case 2:
            titulo.innerHTML = `<h3>greensleeves.webp<h3>`
            ImgTextbox.innerHTML = `Colagem que sintetiza pontos narrativos de uma história que eu tenho na cabeça mas ainda não decidi como contar.`;
            break;
        case 3:
            titulo.innerHTML = `<h3>kevin.png<h3>`
            ImgTextbox.innerHTML = `Personagem de um uma animação que eu pretendo terminar um dia.`;
            break;
        case 4:
            titulo.innerHTML = `<h3>zégarida.png<h3>`
            ImgTextbox.innerHTML = `Personagem de um uma animação que eu pretendo terminar um dia.`;
            break;
        case 5:
            titulo.innerHTML = `<h3>punches.png<h3>`
            ImgTextbox.innerHTML = `Minha tentativa de replicar o estilo de arte do sonic advance.`;
            break;
        case 6:
            titulo.innerHTML = `<h3>garfield.jpg<h3>`
            ImgTextbox.innerHTML = `Imagem que se projetou no meu cérebro um dia e eu me senti na obrigação de desenhar.`;
            break;
        
    }
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}