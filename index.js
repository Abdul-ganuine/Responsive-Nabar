let dropdown=document.querySelector('.collapse');
let navlinks=document.querySelector('.navlinks');
console.log(navlinks);

dropdown.addEventListener('click',function(){
    navlinks.classList.toggle('active');
});