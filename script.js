// Intro Screen

const intro = document.getElementById("intro");

setTimeout(() => {
    intro.style.display = "none";
},3000);

// Live Clock

const clock = document.getElementById("clock");

function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    clock.textContent = hours + ":" + minutes;
}

updateClock();

setInterval(updateClock,1000);

// Wallpaper Switcher

const desktop = document.getElementById("desktop");

const dayBtn = document.getElementById("day-btn");

const nightBtn = document.getElementById("night-btn");

dayBtn.addEventListener("click",()=>{

    desktop.style.backgroundImage =
    "url('assets/wallpapers/day.jpg')";

});

nightBtn.addEventListener("click",()=>{

    desktop.style.backgroundImage =
    "url('assets/wallpapers/night.jpg')";

});