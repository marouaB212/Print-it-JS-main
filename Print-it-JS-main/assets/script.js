
// Définir un tableau d'objets où chaque objet représente une diapositive
const slides = [
    {
        "image": "slide1.jpg", 
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" 
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


let currentIndex = 0;

const prevArrow = document.querySelector('.carousel-control-prev');
const nextArrow = document.querySelector('.carousel-control-next');

const dotsContainer = document.querySelector('.dots');



prevArrow.addEventListener('click', () => {
   
    console.log('Previous arrow clicked');


    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;

    updateBannerImageAndTagline();

	updateSelectedDot();


});


nextArrow.addEventListener('click', () => {
    console.log('Next arrow clicked');

    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;

   updateBannerImageAndTagline();

   updateSelectedDot();	

   
});



const createSliderDots = (parentObject, parentIndex) => {
    parentObject.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === parentIndex) {
            dot.classList.add('dot_selected');
        }
        
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateBannerImageAndTagline();
            updateSelectedDot();
        });

        dotsContainer.appendChild(dot);
    });
}

createSliderDots (slides, currentIndex);


const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');



const updateBannerImageAndTagline = () => {
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerTagLine.innerHTML = slides[currentIndex].tagLine;
}

updateBannerImageAndTagline();

const updateSelectedDot = () => {
	console.log(dots);
	dots.forEach((dot, i) => {
		if (i === currentIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}
