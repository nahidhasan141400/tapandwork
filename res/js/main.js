let nav = document.querySelector('.nava');
let show = document.querySelector(".show");

show.addEventListener('click',(e)=>{
    e.stopPropagation();
    nav.className = 'nava';
});

nav.addEventListener('click',(e)=>{
    e.stopPropagation();
    nav.className = 'nava d';
});
 