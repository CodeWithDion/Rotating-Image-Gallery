// 1. Declare this variables
const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0

// 4. Declare this timer variable for set the auto rotating image
// and remove when click the button for not happen two event during click
let timer

// 2. add this event listener prev and next
prevEl.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
})

nextEl.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
})

// 3. create this function for the rotating image
function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 10000);
}

updateGallery();
