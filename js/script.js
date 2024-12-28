const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const elementHeight = document.querySelector('#height-val')
const elementWeight = document.querySelector('#weight-val')
const result = document.querySelector('#result')
const category = document.querySelector('#category')

let weightValue = 20;
let heightValue = 100;

function changeWeight(){
    weightValue = weight.value
    elementWeight.innerHTML = weightValue + ' kg'
    calculateBMI()
}

function changeHeight(){
    heightValue = height.value
    elementHeight.innerHTML = heightValue + ' cm'
    calculateBMI()
}

function calculateBMI(){
    let bmi = weightValue / (heightValue / 100 * heightValue / 100)
    result.innerHTML = bmi.toFixed(2)

    if(bmi < 18.5){
        category.innerHTML = 'Underweight'
        category.style.color = 'red'
        result.style.color = 'red'
    } else if(bmi >= 18.5 && bmi <= 24.9){
        category.innerHTML = 'Normal weight'
        category.style.color = 'green'
        result.style.color = 'green'
    } else if(bmi >= 25 && bmi <= 29.9){
        category.innerHTML = 'Overweight'
        category.style.color = 'orange'
        result.style.color = 'orange'
    } else if(bmi >= 30){
        category.innerHTML = 'Obesity'
        category.style.color = 'red'
        result.style.color = 'red'
    }
}

weight.addEventListener('input', changeWeight)
height.addEventListener('input', changeHeight)