// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle('show-links');
    const conteinerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    //alert(linksHeight);
    //console.log(linksHeight);
    if (conteinerHeight === 0) {
        linksContainer.style.height = '${linksHeight}px';
        //console.log('altura = ' + linksContainer.style.height);
    }else {
        linksContainer.style.height = 0;
    }
});
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }else {
        navbar.classList.remove('fixed-nav');
    }
    //console.log(scrollHeight);
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else{
        topLink.classList.remove('show-link');
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento
        const id = e.currentTarget.getAttribute('href').slice(1);//Obtiene la palabra inicio u otro de los item
        const element = document.getElementById(id);
        //console.log(id);
        //calcular heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        console.log('nav: ' + navHeight);

        if (!fixedNav) {
            position = position - navHeight;
            //console.log('position: ' + position); 
            
        }

        if (navHeight > 82) {
            position = position + containerHeight;
            console.log('position entro: ' + position);
        }

        window.scrollTo({
            left:0, top: position,
        });
        linksContainer.style.height = 0;
    });
});

let barra = getScrollbarWidth();
console.log(barra);
function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  
    return scrollbarWidth;
  
  }
/*
const scrollLinks2 = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('mouseover',function(e){
        e.currentTarget.style.color = "#3699ca";
    });
    link.addEventListener('mouseout',function(e){
        e.currentTarget.style.color = "white";
    });
});
*/
