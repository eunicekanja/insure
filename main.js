'use strict'
const linksContainer=document.querySelector('.links')
const menuBtn=document.querySelector('.hamburger-menu')


menuBtn.addEventListener('click',function(e){
    e.preventDefault();
    linksContainer.classList.toggle('active')
    document.body.classList.toggle('active')
})