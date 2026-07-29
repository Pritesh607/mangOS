dragElement(document.getElementById("window"))
dragElement(document.getElementById("notes"));
dragElement(document.getElementById("reader"));
dragElement(document.getElementById("wallpaper"));
dragElement(document.getElementById("music"));
// dragElement(document.getElementById("welcome"))

function dragElement(elmnt) {
    var pos1 = 0,pos2 = 0,pos3 = 0,pos4 = 0;
    if(document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    }
    else{
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.querySelector("#windowclose").addEventListener("click", function() {
    closeWindow(windowscreen);
});
document.querySelector("#notesclose").addEventListener("click", function() {
    closeWindow(notesscreen);
});
document.querySelector("#readerclose").addEventListener("click", function() {
    closeWindow(readerscreen);
});
document.querySelector("#wallpaperclose").addEventListener("click", function() {
    closeWindow(wallpaperscreen);
});
document.querySelector("#musicclose").addEventListener("click", function() {
    closeWindow(musicscreen);
});

var windowscreen = document.getElementById("window");
var notesscreen = document.getElementById("notes");
var readerscreen = document.getElementById("reader")
var wallpaperscreen = document.getElementById("wallpaper");
var musicscreen = document.getElementById("music");

function closeWindow(elmnt) {
    elmnt.style.display = "none";
}

function openWindow(elmnt) {
    elmnt.style.display = "flex";
}


function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timetext = document.querySelector("#time");
    timetext.innerHTML = currentTime;
}
setInterval(updateTime,1000);


const notesApp = document.querySelector("#notesIcon");
const readerApp = document.querySelector("#readerIcon");
const wallpaperApp = document.querySelector("#wallpaperIcon");
const musicApp = document.querySelector("#musicIcon");

var selectedIcon = undefined;

notesApp.addEventListener("click", function() {
    iconTap(notesApp);
});

readerApp.addEventListener("click", function() {
    iconTap(readerApp);
});

wallpaperApp.addEventListener("click", function() {
    iconTap(wallpaperApp);
});

musicApp.addEventListener("click", function() {
    iconTap(musicApp);
});


function iconTap(elmnt) {
    if(elmnt.classList.contains("selected")) {
        deselecteIcon(elmnt);
        if(elmnt == notesApp) {
            openWindow(document.getElementById("notes"));
        }else if(elmnt == readerApp){
            openWindow(document.getElementById("reader"));
        }else if(elmnt == wallpaperApp){
            openWindow(document.getElementById("wallpaper"));
        }else if(elmnt == musicApp){
            openWindow(document.getElementById("music"));
        }
        
    }
    else{
        selecteIcon(elmnt);
    }
} 

function selecteIcon(elmnt) {
    elmnt.classList.add("selected");
    selectedIcon = elmnt;
}

function deselecteIcon(elmnt) {
    elmnt.classList.remove("selected");
    selectedIcon = undefined;
}

// import * as pdfjsLib from
// "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.min.mjs";

// pdfjsLib.GlobalWorkerOptions.workerSrc =
// "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs";

// const pdf = await pdfjsLib.getDocument({url: "./assets/One-Punch Man Chapters 101-105.pdf"}).promise;

// console.log(pdf.numPages);

const song = new Audio("./assets/Tokyo Ghoul Opening - Unravel_default.mp3");
function play() {
    song.play();
}
function pause(){
    song.pause();
}
