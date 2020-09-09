const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const slide_img = document.querySelectorAll(".slide-img");
const inicio = document.querySelector('#inicio');

let autoswitch = true; //opciones de autodesplazamiento 
let autoswitch_speed = 3000; //velocidad de autodesplazamiento 

//let counter = 0;
let url = slide_img[0].src;
inicio.style.background = 'url(' + url + ') center/cover no-repeat';

var autodes = setInterval(function(){
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        url = slide_img[counter].src;
       // console.log(url);
        inicio.style.background = 'url(' + url + ') center/cover no-repeat';
    });
    
}, autoswitch_speed);

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
for (var i = 0 ; i < slide_img.length; i++) {
    console.log("entro1");
    inicio.addEventListener('mouseout' , mover , false ) ; 
    inicio.style.opacity = 1;
    inicio.addEventListener('mouseover' , detener , false ) ; 
    inicio.style.cursor = "pointer";
    //slide_img[i].style.opacity = 0.5;
    //console.log("valor: " + slide_img[i]);
};


function detener(){
    console.log("entro");
    clearInterval(autodes);
    let img = document.querySelectorAll(".slide-img");
    for (var i = 0 ; i < img.length; i++) {
        inicio.style.opacity = 0.8;
    };
}
function mover(){
   // console.log("salgo");
    let img = document.querySelectorAll(".slide-img");
    for (var i = 0 ; i < img.length; i++) {
        inicio.style.opacity = 1;
    };
    autodes = setInterval(function(){
        counter++;
        if (counter >= slides.length) {
            counter = 0;
        }
        //(counter);
        slides.forEach(function (slide) {
            slide.style.transform = `translateX(-${counter * 100}%)`;
            url = slide_img[counter].src;
            inicio.style.background = 'url(' + url + ') center/cover no-repeat';
        });
        
    }, autoswitch_speed);
}


nextBtn.addEventListener("click", function () {
    counter++;
    //(counter);
    carousel();
});

prevBtn.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; 
    }
    //(counter);
    carousel();
});

//autodesplazamiento






function carousel() {
    if (counter < slides.length ) {
        nextBtn.style.display = "block";
    } else {
        counter = 0;
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        url = slide_img[counter].src;
        inicio.style.background = 'url(' + url + ') center/cover no-repeat';  
    });
}

