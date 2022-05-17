let nav = document.querySelector('nav');
let loader = document.querySelector('.loader');

window.addEventListener('scroll',()=>{
    let yy = window.pageYOffset;
    if (yy > (window.screen.availHeight - 100)){
        nav.className = 'show';
    }
    else{
        nav.className = '';
    }
    scrineYP=yy;
});

window.addEventListener('load',()=>{
    setTimeout(()=>loader.style='display:none',2000)
})