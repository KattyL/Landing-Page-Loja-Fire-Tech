
//Função para o Slide de imagens 

let slideIndex = 1;

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    console.log("slides: ", slides);
    console.log("slides.length: ", slides.length);
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



document.querySelector(".prev").addEventListener("click", () => {
    nextSlides(-1);
});

document.querySelector(".next").addEventListener("click", () => {
    nextSlides(1);
});


//Funções para o Slide de videos


const slides = document.querySelectorAll('.video-slide');
let currentSlide = 0;

function playVideoInCurrentSlide() {
    const videoId = `video${currentSlide + 1}`;
    const video = document.getElementById(videoId);

    if (video) {
        video.play().catch(error => {
            console.error(`Erro ao reproduzir o vídeo ${videoId}:`, error);
        });
    }
}

function pauseVideoInCurrentSlide() {
    const videoId = `video${currentSlide + 1}`;
    const video = document.getElementById(videoId);

    if (video) {
        video.pause();
    }
}

function goToNextSlide() {
    pauseVideoInCurrentSlide();
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    playVideoInCurrentSlide();
}


const nextSlidesInterval = setInterval(function () { nextSlides(slideIndex) }, 3000);
const slideInterval = setInterval(goToNextSlide, 3000);



//Função de texto ao lado dos videos

document.addEventListener('DOMContentLoaded', function () {
    playVideoInCurrentSlide();
    var videoSlides = document.querySelectorAll('.video-slide');

    // videoSlides.forEach(function (slide) {
    //     slide.addEventListener('click', function () {
    //         var videoDialog = this.querySelector('video');
    //         if (videoDialog) {
    //             if (videoDialog.style.display === 'block') {
    //                 videoDialog.style.display = 'none';
    //             } else {
    //                 videoDialog.style.display = 'block';
    //             }
    //         }
    //     });
    // });
});

