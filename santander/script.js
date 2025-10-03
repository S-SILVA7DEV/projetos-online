const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const slider = document.querySelector(".slider");

let idx = 0;

function carrossel() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 2000}px)`;
}    
setInterval(carrossel, 3000);