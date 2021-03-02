const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carousel__button');

// number of images

const numberOfImages = document.querySelectorAll('.carousel__images img').length;

//tells us currently which image are we on
let imageIndex = 1;

let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id === 'previous'){
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 500;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 500;
            }
        }

        carouselImages.style.transform = `translateX(${translateX}px)`;
    });
});