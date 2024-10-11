import "./workCard"
import "./slider"
import "./faqs"
import "./pricing"
import "./form"


const agenturBurger = document.querySelector('button#burger');
const nav = document.querySelector('nav.menu');

if (agenturBurger) {
    agenturBurger.addEventListener('click', function () {
        nav.classList.toggle('show');
        agenturBurger.classList.toggle('open');
    });
    window.addEventListener('scroll', function () {
        nav.classList.remove('show');
        agenturBurger.classList.remove('open');
    });
}