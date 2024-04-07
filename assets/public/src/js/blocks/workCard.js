const workCard = document.querySelectorAll('.work-card');
console.log(workCard);

workCard.forEach((card) => {
    // get window width
    const cardVideo = card.querySelector('video');
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1024) {
        console.log('windowWidth', windowWidth);
        // set video play attribute 
        cardVideo.setAttribute('autoplay', '');
    }
    card.addEventListener('mouseover', () => {
        workCard.forEach((el) => {
            el.classList.remove('active');
        });
        card.classList.add('active');
        if (cardVideo) {
            cardVideo.play();
        }

    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
        if (cardVideo) {
            cardVideo.pause();
        }
    });
});