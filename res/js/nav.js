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

let sidenavB = document.querySelector('#sidenav-b');
let sidenavCB = document.querySelector('#sidenavC-b');
let sidNAv = document.querySelector('.side-nav')

sidenavB.addEventListener("click",()=>{
    sidNAv.style="left:0px"
})
sidenavCB.addEventListener("click",()=>{
    sidNAv.style="left:-100%"
})

let gofor = (it) => {
    let h = it.parentElement.children[3];
    h.scrollLeft += 250;
  };
let goback = (it) => {
    let h = it.parentElement.children[3];
    h.scrollLeft -= 250;
  };
