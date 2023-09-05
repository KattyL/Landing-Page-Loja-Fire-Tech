
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});


let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); 
}

showSlides(); 
