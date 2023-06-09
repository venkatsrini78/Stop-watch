let timeEle=document.querySelector('.watch .time');
const startbutton=document.getElementById('start');
const stopbutton=document.getElementById('stop');
const resetbutton=document.getElementById('reset');
let counter=0;
let interval=null;
startbutton.addEventListener('click',start);
stopbutton.addEventListener('click',stop);
resetbutton.addEventListener('click',reset);
function timer()
{
    counter++;
let mins = Math.floor(counter / 6001);
let secs = Math.floor((counter - (mins * 6001)) / 100);
let hundrth = counter % 100;

if (hundrth < 10) hundrth = '0' + hundrth;
if (secs < 10) secs = '0' + secs;
if (mins < 10) mins = '0' + mins;

timeEle.innerText = `${mins}:${secs}:${hundrth}`;
}

function start () {
if (interval) {
  retun
}
interval = setInterval(timer, 10);
}

function stop () {
clearInterval(interval);
interval = null;
}

function reset () {
stop();
counter = 0;
timeEle.innerText = '00:00:00';
}