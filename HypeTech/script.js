const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numbers = document.querySelector('.numbers');
const list = document.querySelector('.list');


let active=0;
const total = items.length;
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    if(direction > 0) {
        active = (active + 1)
        if(active >= total) {
            active = 0;
        
        }

}
    else if(direction < 0) {
        active = (active - 1)
        
        if(active < 0) {
            active = total - 1;
        }

}

    items[active].classList.add('active');
    dots[active].classList.add('active');

    
numbers.textContent = String (active + 1).padStart(2, '0');
}


prevBtn.addEventListener('click', () => {
    update(-1);
});

nextBtn.addEventListener('click', () => {
    update(1);
});


clearInterval(timer);
timer = setInterval(() => {
    update(1);
}, 5000);