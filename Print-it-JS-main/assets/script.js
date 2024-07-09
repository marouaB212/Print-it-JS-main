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

//Diapositive actuelle = 0 
let currentIndex = 0;

//Selection des flèches (Précédente/suivante) dans le HTML
const prevArrow = document.querySelector('.arrow_left');
const nextArrow = document.querySelector('.arrow_right');
// Selection du conteneur des points dans le HTML 
const dotsContainer = document.querySelector('.dots');


// Ecouteur d'événement pour les flèches précédentes
prevArrow.addEventListener('click', () => {
   
    console.log('Previous arrow clicked');

     // Maj de l'index de la diapositive actuelle vers la diapositive précédente
    // Si nous sommes à la première diapositive, revenir à la dernière diapositive
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    
    //Maj bannière img et slogan pour la nouvelle diapo
    updateBannerImageAndTagline();

    //Maj des points pour mettre en avant la diapo actuelle 
	updateSelectedDot();


});


nextArrow.addEventListener('click', () => {
    console.log('Next arrow clicked');

    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;

   updateBannerImageAndTagline();

   updateSelectedDot();	

   
});





// Créer et ajouter des points pour chaque diapositive
const createSliderDots = (parentObject, parentIndex) => {
    parentObject.forEach((_, index) => {
        // Créer un nouvel élément span pour le point
        const dot = document.createElement('span');
        dot.classList.add('dot');// Ajouter la classe 'dot' à l'élément span
        if (index === parentIndex) { // Si c'est la première diapositive (currentIndex est 0), mettre en surbrillance le point
            dot.classList.add('dot_selected');
        }
        
        // Ajouter un écouteur d'événements pour les clics sur chaque point
        dot.addEventListener('click', () => {
            currentIndex = index;// Mettre à jour l'index de la diapositive actuelle
            updateBannerImageAndTagline();// Mettre à jour l'image de la bannière et le slogan
            updateSelectedDot();// Mettre à jour les points pour refléter la diapositive actuelle
        });

        // Ajouter le point au conteneur des points dans le HTML
        dotsContainer.appendChild(dot);
    });
}

// Appeler la fonction pour créer les points du carrousel
createSliderDots (slides, currentIndex);

// Sélectionner les éléments de l'image de la bannière et du slogan dans le HTML
const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner p');

// Sélectionner tous les points dans le HTML
const dots = document.querySelectorAll('.dot');


// Fonction pour mettre à jour l'image de la bannière et le slogan
const updateBannerImageAndTagline = () => {
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerTagLine.innerHTML = slides[currentIndex].tagLine;
}

// Appeler la fonction pour afficher la première diapositive initialement
updateBannerImageAndTagline();


// Appeler la fonction pour afficher la première diapositive initialement
const updateSelectedDot = () => {
	console.log(dots);
	dots.forEach((dot, i) => {
		if (i === currentIndex) { // Mettre en surbrillance le point actif
			dot.classList.add('dot_selected');
		} else {  // Enlever la surbrillance des autres points
			dot.classList.remove('dot_selected');
		}
	});
}
