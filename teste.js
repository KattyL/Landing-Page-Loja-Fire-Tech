const videoSlides = document.querySelectorAll('.video-slide');
const videoContainer = document.querySelector('.slider-container');

let currentVideoIndex = 0;
let currentVideo = videoSlides[currentVideoIndex].querySelector('video');

function playVideo(index) {
    currentVideo.pause();
    currentVideoIndex = index;
    currentVideo = videoSlides[currentVideoIndex].querySelector('video');
    currentVideoTitle = videoSlides[currentVideoIndex].querySelector('p').textContent;

    videoTitle.textContent = currentVideoTitle;
    videoDescription.textContent = '';

    currentVideo.muted = true;
    currentVideo.controls = false;

    currentVideo.play().catch(error => {

        console.error('Erro ao iniciar a reprodução:', error);
    });
}

videoSlides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        playVideo(index);
    });
});

playVideo(currentVideoIndex);
