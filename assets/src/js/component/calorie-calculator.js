const calorieCalculatorForm = document.querySelector('.calorie-calculator-form');
const calorieCalculatorResultContainer = document.querySelector('.calorie-calculator-result-container');

const calorieCalculator = (e) => {
    e.preventDefault();
    
    const gender = document.querySelector('#gender .box-input.active input').value;
    const age = document.querySelector('#age').value;
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    let bodyFat = document.querySelector('#bodyFat').value;
    const activity = document.querySelector('#activity').value;
    const goal = document.querySelector('#goal .box-input.active input').value;
    let bmr;
    let tdee;
    let calorie;
    let protein;
    let carbs = 0;
    let proteinCalorie = 0;
    let fatCalorie = 0;
    let carbsCalorie = 0;

    if(gender === 'm') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    tdee = bmr * activity;
    if(goal === '0') {
        calorie = tdee - 500;
    } else if(goal === '1') {
        calorie = tdee + 500;
    } else {
        calorie = tdee;
    }
    protein = weight * 2.2;
    bodyFat = (calorie * 0.25) / 9;
    carbs = (calorie - (protein * 4) - (bodyFat * 9)) / 4;
    proteinCalorie = protein * 4;
    fatCalorie = bodyFat * 9;
    carbsCalorie = carbs * 4;

    calorieCalculatorResultContainer.innerHTML = `
        <div class="calorie-calculator-result">
            <h3 class="uppercase">Dein Ergebnis 🎉</h3>
            <ul class="result-list">
                <li><strong>BMR:</strong><p> ${bmr.toFixed(2)} kcal / Tag</p></li>
                <li><strong>TDEE:</strong><p> ${tdee.toFixed(2)} kcal / Tag</p></li>
                <li><strong>Calorie:</strong><p> ${calorie.toFixed(2)} kcal / Tag</p></li>
                <li><strong>Proteine:</strong><p> ${protein.toFixed(2)} g (${proteinCalorie.toFixed(2)} kcal / Tag)</p></li>
                <li><strong>Fett:</strong><p> ${bodyFat.toFixed(2)} g (${fatCalorie.toFixed(2)} kcal / Tag)</p></li>
                <li><strong>Kohlenhydrate:</strong><p> ${carbs.toFixed(2)} g (${carbsCalorie.toFixed(2)} kcal / Tag)</p></li>
            </ul>
        </div>
    `;

    
    calorieCalculatorResultContainer.classList.add('active');
    const goBackButton = document.createElement('button');
    goBackButton.classList.add('go-back-button');
    goBackButton.textContent = 'Zurück';
    calorieCalculatorResultContainer.appendChild(goBackButton);
    goBackButton.addEventListener('click', () => {
        calorieCalculatorForm.style.display = 'flex';
        calorieCalculatorResultContainer.innerHTML = '';
        calorieCalculatorResultContainer.classList.remove('active');
    });
}
function getGenderValue() {
    const radioGroup = document.querySelectorAll('#gender .box-input');
    radioGroup.forEach((radio) => {
        radio.addEventListener('click', (e) => {
            radioGroup.forEach((radio) => {
                radio.classList.remove('active');
            });
            e.target.parentElement.classList.add('active');
        });
    });
}

function getGoalValue() {
    const radioGroup = document.querySelectorAll('#goal .box-input');
    radioGroup.forEach((radio) => {
        radio.addEventListener('click', (e) => {
            radioGroup.forEach((radio) => {
                radio.classList.remove('active');
            });
            e.target.parentElement.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (calorieCalculatorForm) {
        getGenderValue();
        getGoalValue();
        calorieCalculatorForm.addEventListener('submit', calorieCalculator);
    }
});