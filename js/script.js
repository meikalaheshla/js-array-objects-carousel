

/* ## Consegna
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione



Creare un carosello ispirandosi alla foto allegata. Potete anche usare come base il carosello dell'esercizio precedente



## Milstone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.


## Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.



## Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
---

## BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.


## BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.


## BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
 */









// PRENDO L ARRAY DI OGGETTI



const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];

// PRENDO GLI ELEMENTI HTML 
const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');
const carousel = document.getElementById('carousel');
const gallery = document.getElementById('gallery');


// CREO L' ELENCO DELLE IMMAGINI DENTRO LA GALLERY
console.table(images)

let img = '';
let text = '';
images.forEach((image) => {
    const { url, title, description } = image;
    img += `<img src ="${url}" alt ="img ${title}">`;
    text += `
    <div class="overlay">
        <h2>${title}</h2>
            <span>${description}</span>
    </div>`


})
gallery.innerHTML = img + text;
thumbnails.innerHTML = img;


// PRENDO GLI ELEMENTI APPENA CREATI

const galleryImages = document.querySelectorAll('#carousel img');
const imagesTitles = document.querySelectorAll('#gallery .overlay')

// AGGIUNGO LA THUMBNAIL
const thumbImages = document.querySelectorAll('#thumbnails img')


// IMPOSTO UNO STATUS 0

let currentActiveIndex = 0;

galleryImages[currentActiveIndex].classList.add('d-block');
imagesTitles[currentActiveIndex].classList.add('d-block');
thumbImages[currentActiveIndex].classList.add('active');

// LOGICA AL CLICK NEXT

let seeNextImg = () => {
    galleryImages[currentActiveIndex].classList.remove('d-block');
    imagesTitles[currentActiveIndex].classList.remove('d-block');
    thumbImages[currentActiveIndex].classList.remove('active');



    currentActiveIndex++;

    // CONDIZIONE PER IL LOOP

    if (currentActiveIndex === galleryImages.length) {
        currentActiveIndex = 0;

    }

    galleryImages[currentActiveIndex].classList.add('d-block');
    imagesTitles[currentActiveIndex].classList.add('d-block');
    thumbImages[currentActiveIndex].classList.add('active');

}

nextButton.addEventListener('click', seeNextImg)


// LOGICA AL CLICK PER IL PREV

let seePrevImg = () => {
    galleryImages[currentActiveIndex].classList.remove('d-block');
    imagesTitles[currentActiveIndex].classList.remove('d-block');
    thumbImages[currentActiveIndex].classList.remove('active');



    currentActiveIndex--;

    // CONDIZIONE PER IL LOOP

    if (currentActiveIndex < 0) {
        currentActiveIndex = galleryImages.length - 1;

    }

    galleryImages[currentActiveIndex].classList.add('d-block');
    imagesTitles[currentActiveIndex].classList.add('d-block');
    thumbImages[currentActiveIndex].classList.add('active');
}

prevButton.addEventListener('click', seePrevImg)



// FUNZIONE DI AUTOPLAY

//setInterval(seeNextImg, 3000);


// FUNZIONE START AND STOP WITH BUTTONS

// PRENDO IL BOTTONE START STOP
const playStopBtn = document.getElementById('button-play-stop');
const backWardBtn = document.getElementById('button-rewind')



// DICHIARO LE VARIABILI DI APPOGGIO

let imgCarousel;
let isClicked = false;

// AGGIUNGO L'EVENTO AL CLICK DEL BOTTONE

playStopBtn.addEventListener('click', () => {
    if (!isClicked) {
        clearInterval(imgCarousel)
        playStopBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
        imgCarousel = setInterval(seeNextImg, 3000);
        console.log(isClicked)


    } else {
        playStopBtn.innerHTML = `<i class="fa-solid fa-play"></i >`
        clearInterval(imgCarousel)
        console.log(isClicked)
    }
    isClicked = !isClicked
})


// AGGIUNGO L'EVENTO DEL BACKWARD CHE FA CAMBIARE ANCHE IL TASTO START E STOP PER MERMETTERE DI ARRESTARE ANCHE IL COCLO OPPOSTO

backWardBtn.addEventListener('click', () => {

    isClicked = true;
    clearInterval(imgCarousel)
    playStopBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
    imgCarousel = setInterval(seePrevImg, 3000);
    console.log(isClicked)


})





