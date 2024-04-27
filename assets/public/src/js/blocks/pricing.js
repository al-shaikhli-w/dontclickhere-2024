const selectThePriceOptionOnMobile = () => {
    const priceOptions = document.querySelector('#price-packet');
    if (!priceOptions) {
        return;
    }
    priceOptions.addEventListener('change', (event) => {
        console.log(event.target.value);
    });


}
document.addEventListener("DOMContentLoaded", selectThePriceOptionOnMobile);