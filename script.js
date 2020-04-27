
let bars = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.fa-times');
let menu = document.querySelector('.menu');
let menus = document.querySelectorAll('.menu a');
let downArrow = document.querySelector('.fa-arrow-down');

bars.addEventListener('click',()=>{
    menu.classList.toggle('show');
})
closeBtn.addEventListener('click',()=>{
    menu.classList.toggle('show');
})
menus.forEach(menu1=>{
    menu1.addEventListener('click',()=>{
        menu.classList.toggle('show');
    })
})


//Intersection observer

let speciality = document.querySelector('header');
let nav = document.querySelector('.nav');
let options = {
    root:null,
    threshold:0,
    rootMargin:"-150px"
}

let IntersectionObsrvr = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) {
            nav.classList.remove('darknav')
        }else {
            nav.classList.add('darknav')
        }
    })
},options)

IntersectionObsrvr.observe(speciality);