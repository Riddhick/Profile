const hamburger=document.getElementById('ham');
const navUL=document.getElementById('nav');

hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
});