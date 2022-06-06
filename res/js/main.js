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
 
// end 


// let cards = document.querySelectorAll('.service');

// let observ = new IntersectionObserver((entry)=>{
//     entry[0].target.classList.toggle('show', entry[0].isIntersecting);
//     // console.log(entry[0].target);
// },
// {
//     threshold: 0,
// })

// cards.forEach(card => observ.observe(card))
// // observ.observe(cards[0])