const section=document.querySelector('section');
const navLink=document.querySelector('header nav a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    var header=document.querySelector('header')
    header.classList.toggle("sticky",window.onscrollY>100);

    menubar.classList.remove('bx-x')
    menubar.classList.remove('active')
};

let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



var type= new Typed('#element',{
    strings:["Frontent Developer","Designer","UI-UX Designer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

const skillSection = document.getElementById('skill-section');

const progressBars = document.querySelectorAll('.progress-bar');

function showprogress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;

        // console.log(value);
    });
}

function hideprogress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll',() => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos){
        // console.log('show progress');
        showprogress();
    }
    else{
        // console.log('hide progress');
        hideprogress();
    }
});