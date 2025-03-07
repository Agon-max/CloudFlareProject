/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu');
        });
    }
     

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

var linkClick = () =>{
    const navMenu = document.getElementById('nav-menu');
    
    navMenu.classList.remove('show-menu')
}

navLink.forEach(l => l.addEventListener('click', linkClick));


/*=============== GSAP ANIMATION ===============*/
