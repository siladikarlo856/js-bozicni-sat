const daysLeftEl = document.getElementById('daysLeft');
const hoursLeftEl = document.getElementById('hoursLeft');
const minutesLeftEl = document.getElementById('minutesLeft');
const secondsLeftEl = document.getElementById('secondsLeft');

const christmas2021 = new Date('December 25, 2021 00:00:00');


function updateDOM() {
    const timeUntilChristmas = christmas2021.getTime() - Date.now();
    
    if (timeUntilChristmas <= 0) {
        // It is Christmas
    }

    const secondsUntilChristmas = Math.floor(timeUntilChristmas/1000 % 60);
    const minutesUntilChristmas = Math.floor(timeUntilChristmas/1000/60 % 60);
    const hoursUntilChristmas = Math.floor(timeUntilChristmas/1000/60/60 % 60);
    const daysUntilChristmas = Math.floor(timeUntilChristmas/1000/60/60/24 % 60);
    
   daysLeftEl.innerText = daysUntilChristmas;
   hoursLeftEl.innerText = hoursUntilChristmas;
   minutesLeftEl.innerText = minutesUntilChristmas;
   secondsLeftEl.innerText = secondsUntilChristmas;

}


// On Load
updateDOM();

// call function periodically
setInterval(updateDOM, 1000);
