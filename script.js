
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









// CAROUSEL GALLERY //////////////////////


const imgs = document.getElementById('imgs') //gallery container

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


const img = document.querySelectorAll('#imgs .gallery-item')


const mediaQuery = window.matchMedia('(max-width: 544px)')





if (mediaQuery.matches) {
    let idx = 0

    let interval = setInterval(run, 2000);

    function run(){
    idx++
    changeImage()
    }   


    function changeImage(){

        if(idx > img.length -1){
            idx = 0
        }else if(idx<0){
            idx = img.length -1
        }
    
        imgs.style.transform = `translateX(${-idx * 300}px)`
    }

  }else{
    // imgs.style.transform = `translateX(${-idx * 0}px)`
  }
  

// function changeImage(){

//     if(idx > img.length -1){
//         idx = 0
//     }else if(idx<0){
//         idx = img.length -1
//     }

//     imgs.style.transform = `translateX(${-idx * 300}px)`
// }

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', function(){
    nav.classList.toggle('navactive')
})