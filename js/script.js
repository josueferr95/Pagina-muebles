let menu=document.querySelector('.menu');
let btnMenu=document.querySelector('.menu-btn');
let btnClose=document.querySelector('.close');
let btnOpen=document.querySelector('.open');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('opened');
    btnClose.classList.toggle('close-on');
    btnOpen.classList.toggle('open-off');
});