window.addEventListener('DOMContentLoaded', () => {
    const workCard = document.querySelectorAll('.work-card');
    // window.addEventListener('resize', () => {
    workCard.forEach((card) => {
        const windowWidth = window.innerWidth;
        const cardVideo = card.querySelector('video');
        // get window width
        if (windowWidth <= 1024) {
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
    // }
    // );

});
