const daysElement = document.getElementById('daysElement');
const hoursElement = document.getElementById('hoursElement');
const minElement = document.getElementById('minElement');
const secElement = document.getElementById('secElement');

setInterval(()=> {
    const time = new Date();
    // console.log(time)
    const d = time.getDay();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    daysElement.innerHTML = d;
    hoursElement.innerHTML = h;
    minElement.innerHTML = m;
    secElement.innerHTML = s;
}, 1000)


