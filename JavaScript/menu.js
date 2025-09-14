let navbar = document.querySelector('#header')
document.addEventListener("scroll", ()=>{
    let scrolltop = window.scrollY
    if(scrolltop > 0){
        navbar.classList.add('rolar')
    } else {
        navbar.classList.remove('rolar')
    }
})

let btnMenuMob = document.querySelector ('#btn-menu-mob')
let line1 = document.querySelector('.line-menu-mob-1')
let line2 = document.querySelector('.line-menu-mob-2')
let menumobile = document.querySelector('#menu-mobile')
let body = document.querySelector('body')

btnMenuMob.addEventListener("click", ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menumobile.classList.toggle('abrir')
    body.classList.toggle('no-overflow')
})