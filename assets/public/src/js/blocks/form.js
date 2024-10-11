import Litepicker from 'litepicker';
const tabs = document.querySelectorAll(".tab");

if (tabs[0]) {
    let currentTab = 0;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const steps = document.querySelector("#steps");
    const customerHasWebsite = document.querySelector(".customer-has-website");
    const customerHasCustomColor = document.querySelector(".customer-has-custom-color");
    const customerHasLogo = document.querySelector(".customer-has-logo");

    window.addEventListener('DOMContentLoaded', function () {
        tabs.forEach((tab, index) => {
            const step = document.createElement("span");
            step.classList.add("step");
            step.innerHTML = index + 1;
            steps.appendChild(step);
            if (index === 0) {
                step.classList.add("active");
            }
            tab.style.display = "none";
        });

        tabs[currentTab].style.display = "grid";
        prevBtn.disabled = true;
        prevBtn.style.cursor = "not-allowed";

        nextBtn.addEventListener('click', function () {
            tabs[currentTab].style.display = "none";
            currentTab = (currentTab + 1) % tabs.length;
            tabs[currentTab].style.display = "grid";
            prevBtn.disabled = false;
            prevBtn.style.cursor = "pointer";
            nextBtn.disabled = currentTab === tabs.length - 1;
            nextBtn.style.cursor = currentTab !== tabs.length - 1 ? "pointer" : "not-allowed";
            updateSteps();
        });

        prevBtn.addEventListener('click', function () {
            if (currentTab === 0) {
                return;
            }
            tabs[currentTab].style.display = "none";
            currentTab = (currentTab - 1 + tabs.length) % tabs.length;
            tabs[currentTab].style.display = "grid";
            prevBtn.disabled = currentTab === 0;
            prevBtn.style.cursor = currentTab === 0 ? "not-allowed" : "pointer";
            nextBtn.disabled = false;
            nextBtn.style.cursor = "pointer";
            // how to make the steps clickable when i click i go to the tab i clicked on
            updateSteps();
        });

        const websiteRadios = document.querySelectorAll("#website input[type='radio']");
        addRadioChangeListener(websiteRadios, customerHasWebsite);

        const selectionColors = document.querySelectorAll("#colors input[type='radio']");
        addRadioChangeListener(selectionColors, customerHasCustomColor);
        // data-name="wish-color"
        const wishColorFile = document.querySelector("[data-name='wish-color']");
        addRadioChangeListener(selectionColors, wishColorFile);

        const logo = document.querySelectorAll("#logo input[type='radio']");
        addRadioChangeListener(logo, customerHasLogo);


        //
        const wishTime = document.querySelector("#callback-time");
        if (wishTime) {
        new Litepicker({
            element: wishTime,
            format: 'YYYY-MM-DD',
            lang:"de",
            autoRefresh: true,
            autoUpdateInput: false,
            resetButton: true,
            resetButtonPlacement: 'left',
            mobileFriendly: true,
            minDate: new Date(),
        });
        }
        document.addEventListener( 'wpcf7mailsent', function( event ) {
            setTimeout( () => {
                location = 'https://dontclickhere.at/thank-you/';
            }, 10 );
        }, false );
    });

    function updateSteps() {
        const steps = document.querySelectorAll(".step");
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === currentTab);
        });
    }
    function addRadioChangeListener(radios, element) {
        radios.forEach(radio => {
            radio.addEventListener('change', function () {
                const valueToLowerCase = this.value.toLowerCase();
                if (valueToLowerCase === "yes" || valueToLowerCase === "ja") {
                    element.style.display = valueToLowerCase ? "block" : "none";
                }else if (valueToLowerCase === "custom" || valueToLowerCase === "sonstige") {
                    element.style.display = valueToLowerCase ? "block" : "none";
                }else {
                    element.style.display = valueToLowerCase ? "none" : "block";
                }
            });
        });
    }
}

