let hourdiv = document.querySelector("[data-hour-hand]");
let mindiv = document.querySelector("[data-minute-hand]");
let secdiv = document.querySelector('[data-second-hand]');

setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    let hours = date.getHours() / 12;
    
    setRotation(secdiv, sec);
    setRotation(mindiv, min);
    setRotation(hourdiv, hours);

    let date1 = new Date();
    let sec1 = date1.getSeconds();
    let min1 = date1.getMinutes();
    let hours1 = date1.getHours();

    if (hours1 >= 12) {
        let hour2 = hours1 - 12;
        document.getElementById('hou').innerText = hour2;
    } else {
        document.getElementById('hou').innerText = hours1;
    }

    document.getElementById('min').innerText = min1;
    document.getElementById('sec').innerText = sec1;
   

    if (hours1 >= 12) {
        document.getElementById('time').innerText = "PM";
    } else {
        document.getElementById('time').innerText = "AM";
    }
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

updateClock();
