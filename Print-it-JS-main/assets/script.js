// Tableau d'objects, avec les imagaes et les taglines.
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

// Initialisation de l'index courant
let currentIndex = 0;


const prevArrow = document.querySelector('.arrow_left');
const nextArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');



// Écouteurs d'événements pour les flèches de navigation
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



// Création des "dots" 
const createSliderDots = (parentObject, parentIndex) => {
    parentObject.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === parentIndex) { 
            dot.classList.add('dot_selected');
        }
        
        //Ajout d'evenement dot -> slide correspondante
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateBannerImageAndTagline();
            updateSelectedDot();
        });

        dotsContainer.appendChild(dot);
    });
}

//Rappel de la fonction pour créer les points du caroussel
createSliderDots(slides, currentIndex);

// Sélection des éléments pour l'image de la bannière et le tagline
const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner p');

// Sélection de toutes les "dots"
const dots = document.querySelectorAll('.dot');


// Fonction pour mettre à jour l'image et le tagline de la bannière
const updateBannerImageAndTagline = () => {
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerTagLine.innerHTML = slides[currentIndex].tagLine;
}


updateBannerImageAndTagline();


// Fonction pour mettre à jour la sélection visuelle des "dots"
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
