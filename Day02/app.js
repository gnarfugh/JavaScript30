var secondHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
var digiClock = document.querySelector('.digital-clock');

function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var mins = now.getMinutes();
    var hours = now.getHours();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    var minsDegrees = ((mins / 60) * 360) + 90;
    var hoursDegrees = ((hours / 12) * 360) + 90;
    var ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
        hours -= 12;
        if (hours < 10) {
            hours = '0' + String(hours);
        }
    }
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    if (secondsDegrees === 360) {
        secondHand.style.transition = 'none';
    }
    if (minsDegrees === 360) {
        minHand.style.transition = 'none';
    }
    if (hoursDegrees === 360) {
        hourHand.style.transition = 'none';
    }

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    digiClock.textContent = ((`${hours}:`) + (`${mins}:`) + `${seconds}` + ` ${ampm}`);

}

setInterval(setDate, 1000);
