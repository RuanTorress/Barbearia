const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function nextSlide() {
    if (counter >= images.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function prevSlide() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function resetPosition() {
    if (images[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = images.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = images.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}

carouselSlide.addEventListener('transitionend', resetPosition);

setInterval(nextSlide, 9000); // Muda de slide a cada 7 segundos




// DEPOIMENTOS 


const testimonialsContainer = document.querySelector('.testimonials-container');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateSlidePosition();
});

nextButton.addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, testimonialsContainer.children.length - 1);
    updateSlidePosition();
});

function updateSlidePosition() {
    const slideWidth = testimonialsContainer.children[0].offsetWidth;
    testimonialsContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}


