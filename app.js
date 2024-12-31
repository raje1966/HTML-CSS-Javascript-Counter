let countEl = document.querySelector('.count');
const lowerEl = document.querySelector('#lower');
const addEl = document.querySelector('#add');

let cal = 0;

lowerEl.addEventListener('click', lowerCounter);
addEl.addEventListener('click', addCounter);



function lowerCounter() {
    cal--;
    countEl.innerHTML = cal;
    if (countEl.innerHTML < '0') {
        countEl.style.color = 'red';
    } else if (countEl.innerHTML === '0'){
        countEl.style.color = 'white';
    }
    countEl.animate([{ opacity: '0.2' }, {opacity: '1.0' }], {duration: 1000, fill: 'forwards'})
}

function addCounter() {
    cal++;
    countEl.innerHTML = cal;
    if (countEl.innerHTML > '0') {
        countEl.style.color = 'green';
    } else if (countEl.innerHTML === '0') {
        countEl.style.color = 'white'
    }
    countEl.animate([{ opacity: '0.2' }, {opacity: '1.0' }], {duration: 1000, fill: 'forwards'})
}