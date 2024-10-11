const themeColors = document.querySelector('.theme-color select');
if(themeColors){
    themeColors.addEventListener('change', function(e) {
        // change the theme color on data-theme attribute of html tag
        document.documentElement.setAttribute('data-theme', this.value);
        // save the selected theme color in local storage
        localStorage.setItem('themeColor', this.value);
    });

    window.addEventListener('load', function() {
        const themeColor = localStorage.getItem('themeColor');
        if(themeColor){
            themeColors.value = themeColor;
            document.documentElement.setAttribute('data-theme', themeColor);
        }
    });
}