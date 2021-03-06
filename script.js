
//sticky nav that changes color on scroll
const ul = document.querySelector('.ul')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY>ul.offsetHeight +150){
        ul.classList.add('active')
    }else{
        ul.classList.remove('active')
    }
}

//scrollspy

let section= document. querySelectorAll('.section');
let navLinks= document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    section.forEach(sec =>{

        let top = window.scrollY;
        let offset= sec.offsetTop;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links =>{
                links.classList.remove('hoveractive');

                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('hoveractive')
            })
        }    
    })
}

// SLIDER //////////////////////


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 

// NAV

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', function(){
    nav.classList.toggle('navactive')
	})