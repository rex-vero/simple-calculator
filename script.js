const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const times = document.getElementById('times');
const power = document.getElementById('power');
const remainder = document.getElementById('remainder');
const result = document.getElementById('result');
const calculator = (value) => {
    if (value === 'add') {
        const temp = +num1.value + +num2.value;
        result.style.display = "block"
        result.innerText = temp;
    } else if (value === 'minus') {
        const temp = +num1.value - +num2.value;
        result.style.display = "block"
        result.innerText = temp;
    } else if (value === 'divide') {
        const temp = +num1.value / +num2.value;
        result.style.display = "block"
        result.innerText = temp;
    } else if (value === 'times') {
        const temp = +num1.value * +num2.value;
        result.style.display = "block"
        result.innerText = temp;
    } else if (value === 'power') {
        const temp = num1.value ** num2.value;
        result.style.display = "block"
        result.innerText = temp;
    } else if (value === 'remainder') {
        const temp = num1.value % num2.value;
        result.style.display = "block"
        result.innerText = temp;
    }
}
add.addEventListener('click', calculator.bind(this, 'add'))
minus.addEventListener('click', calculator.bind(this, 'minus'))
divide.addEventListener('click', calculator.bind(this, 'divide'))
times.addEventListener('click', calculator.bind(this, 'times'))
power.addEventListener('click', calculator.bind(this, 'power'))
remainder.addEventListener('click', calculator.bind(this, 'remainder'))