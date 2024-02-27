let counter = 0;

const incrementFunction = () => {
    counter++;
    document.getElementById('counter-number').textContent = counter;
}
    console.log(`increment logged!`)


const decrementFunction = () => {
    counter--;
    document.getElementById('counter-number').textContent = counter;
}
    console.log(`decrement logged!`)