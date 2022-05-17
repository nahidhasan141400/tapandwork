let nav = document.querySelector('nav')
window.addEventListener('scroll',()=>{
    let yy = window.pageYOffset;
    if (yy > (window.screen.availHeight)){
        nav.className = 'show';
    }
    else{
        nav.className = '';
    }
    scrineYP=yy;
});

console.log(window.screenX)