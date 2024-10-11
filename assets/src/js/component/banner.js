window.addEventListener('DOMContentLoaded', function() {
    const sectionLink = document.querySelector('.section-link');
    if (sectionLink) {        
        sectionLink.addEventListener('click', function() {
            sectionLink.scrollIntoView({
                behavior: 'smooth',
                speed: 1000,
                block: 'start'
            });
        });
    }
});
