
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});


let slideIndex = 1;

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    let video = slides[slideIndex - 1].querySelector("video");
    if (video) {
        video.play();
}
}
function nextSlides(n) {
    showSlides(slideIndex += n);
}

showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", () => {
    nextSlides(-1);
});

document.querySelector(".next").addEventListener("click", () => {
    nextSlides(1);
});


//Esconder ao scrollar



