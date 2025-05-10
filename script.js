document.getElementById('increment-btn').addEventListener('click', incrementCounter);
document.getElementById('decrement-btn').addEventListener('click', decrementCounter);
document.getElementById('reset-btn').addEventListener('click', resetCounter);

let counterDisplay = document.getElementById('counter-display');
let counterValue = 0;

function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
    counterDisplay.classList.add('pulse');
    setTimeout(() => counterDisplay.classList.remove('pulse'), 150);
}

function incrementCounter(){
    counterValue++;
    updateCounterDisplay();
}

function decrementCounter(){
    if(counterValue > 0){
        counterValue--;
        updateCounterDisplay();
    }    
}

function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
}