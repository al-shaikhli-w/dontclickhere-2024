window.onload = function () {
    const preloader = document.querySelector('.preloader');

    if (preloader) {
        setTimeout(function () {
            const preloaderLogo = preloader.querySelector('.custom-logo-link');
            if (preloaderLogo) {
                preloaderLogo.style.display = 'none';

            }
            preloader.style.transition = 'height 0.5s ease';
            preloader.style.height = '0';

            preloader.addEventListener('transitionend', function () {
                preloader.style.display = 'none';
            });
        }, 500);
    }
};