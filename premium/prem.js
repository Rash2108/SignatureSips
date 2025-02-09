let slideIndex = 0;
const slides = document.querySelector(".carousel-slide");
const images = slides.querySelectorAll("img");

// Function to move slides with navigation buttons
function moveSlide(n) {
    slideIndex = (slideIndex + n + images.length) % images.length;
    updateCarousel();
}

// Function to display a specific slide on thumbnail click
function showSlide(n) {
    slideIndex = n;
    updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);


function logout(){
    if(confirm("Do You Want to LOG-OUT")){
        window.location.href="/index.html"
    }
}
