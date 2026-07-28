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


const growIcon = document.getElementById("grow-icon");

const growWindow = document.getElementById("grow-window");

const closeGrow = document.getElementById("close-grow");

growIcon.addEventListener("click",()=>{

    growWindow.classList.add("show");

});

closeGrow.addEventListener("click",()=>{

    growWindow.classList.remove("show");
    
    growWindow.addEventListener("mousedown",()=>{

    z++;

    growWindow.style.zIndex=z;

});

});


let z = 100;

const journalIcon = document.getElementById("journal-icon");

const journalWindow = document.getElementById("journal-window");

const closeJournal = document.getElementById("close-journal");

const journalText = document.getElementById("journal-text");

journalIcon.addEventListener("click",()=>{

    journalWindow.classList.add("show");

});

closeJournal.addEventListener("click",()=>{

    journalWindow.classList.remove("show");

    journalWindow.addEventListener("mousedown",()=>{

    z++;

    journalWindow.style.zIndex=z;

});

});

// Load saved note

journalText.value = localStorage.getItem("journal") || "";

// Save while typing

journalText.addEventListener("input",()=>{

    localStorage.setItem("journal",journalText.value);

});





const settingsIcon = document.getElementById("settings-icon");

const settingsWindow = document.getElementById("settings-window");

const closeSettings = document.getElementById("close-settings");

settingsIcon.addEventListener("click",()=>{

    settingsWindow.classList.add("show");

});

closeSettings.addEventListener("click",()=>{

    settingsWindow.classList.remove("show");

    settingsWindow.addEventListener("mousedown",()=>{

    z++;

    settingsWindow.style.zIndex=z;

});

});

// Wallpaper Buttons

const dayTheme=document.getElementById("day-theme");

const nightTheme=document.getElementById("night-theme");

dayTheme.addEventListener("click",()=>{

    desktop.style.backgroundImage=
    "url('assets/wallpapers/day.jpg')";

});

nightTheme.addEventListener("click",()=>{

    desktop.style.backgroundImage=
    "url('assets/wallpapers/night.jpg')";

});



const root=document.documentElement;

document.querySelector(".green").onclick=()=>{

    root.style.setProperty("--primary","#6BBF59");

}

document.querySelector(".blue").onclick=()=>{

    root.style.setProperty("--primary","#4A90E2");

}

document.querySelector(".orange").onclick=()=>{

    root.style.setProperty("--primary","#F4A261");

}

document.getElementById("reset-theme").onclick=()=>{

    root.style.setProperty("--primary","#6BBF59");

    desktop.style.backgroundImage="url('assets/wallpapers/day.jpg')";

}



function dragWindow(windowElement,header){

    let offsetX=0;
    let offsetY=0;
    let dragging=false;

    header.addEventListener("mousedown",(e)=>{

        dragging=true;

        offsetX=e.clientX-windowElement.offsetLeft;
        offsetY=e.clientY-windowElement.offsetTop;

    });

    document.addEventListener("mousemove",(e)=>{

        if(!dragging) return;

        windowElement.style.left=(e.clientX-offsetX)+"px";
        windowElement.style.top=(e.clientY-offsetY)+"px";

    });

    document.addEventListener("mouseup",()=>{

        dragging=false;

    });

}