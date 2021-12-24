const daysLeftEl = document.getElementById('daysLeft');
const hoursLeftEl = document.getElementById('hoursLeft');
const minutesLeftEl = document.getElementById('minutesLeft');
const secondsLeftEl = document.getElementById('secondsLeft');


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const christmas2021 = new Date('December 25, 2021 00:00:00');

function formatNumber(number) {
    return number<10 ? `0${number}` : number;
}

function updateDOM() {
    const timeUntilChristmas = christmas2021.getTime() - Date.now();
    
    if (timeUntilChristmas <= 0) {
        // It is Christmas
        console.log("Bozic je")
        document.querySelectorAll(".counter-layer").forEach(el => el.style.display = "none");
        document.querySelector(".christmas-message-container").style.display = "flex";
    }

    const daysUntilChristmas = Math.floor(timeUntilChristmas / day);
    const hoursUntilChristmas = Math.floor((timeUntilChristmas % day) / hour);
    const minutesUntilChristmas = Math.floor((timeUntilChristmas % hour) / minute);
    const secondsUntilChristmas = Math.floor((timeUntilChristmas % minute) / second);
    
   daysLeftEl.innerText = formatNumber(daysUntilChristmas);
   hoursLeftEl.innerText = formatNumber(hoursUntilChristmas);
   minutesLeftEl.innerText = formatNumber(minutesUntilChristmas);
   secondsLeftEl.innerText = formatNumber(secondsUntilChristmas);
}


// On Load
updateDOM();

// call function periodically
setInterval(updateDOM, 1000);
