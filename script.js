
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