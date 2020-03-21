//Переключение активного пункта меню
var menu = document.getElementById('list')
var items=menu.getElementsByClassName('nav__link') 

menu.addEventListener('click', (event)=>{

   [...items].forEach(element => {element.classList.remove('nav__link_active') });
    event.target.classList.add('nav__link_active') 
})



document.addEventListener ('scroll', onScroll)

function onScroll (event) {
 var curPos= window.scrollY;
 var section = document.querySelectorAll ('#main>section');
 var links = document.querySelectorAll('#list a');
 section.forEach((el)=>{

    if (el.offsetTop<=curPos+95 && (el.offsetTop + el.offsetHeight)>curPos+95) {
        links.forEach((a)=> {
            a.classList.remove('nav__link_active')           
            
            if(el.dataset.id===a.getAttribute('href').substring(1)) {
                a.classList.add('nav__link_active')
            }
        })
    } 
    if (curPos > (section[section.length - 1].offsetTop - 500)) {
        links[links.length - 2].classList.remove('nav__link_active')
        links[links.length - 1].classList.add('nav__link_active')
	}
 });  

}

/* Slider*/

let SLIDER = document.getElementById('slider');
let slides = document.querySelectorAll('.slide_single');
let current = 0;
let sliderBlocked = false;


function slider_init() {
    let offset = 0;
    let slide2 = (current === 0) ? 1 : 0;
    SLIDER.innerHTML = '';
    let elem = slides[slide2].cloneNode(true);
    elem.style.left = offset*830 - 830 + 'px';
    slides[current].style.left = offset*830 + 'px';
    offset += 1;
    slides[slide2].style.left = offset*830 + 'px';
    SLIDER.appendChild(elem);
    SLIDER.appendChild(slides[current]);
    SLIDER.appendChild(slides[slide2]);
}

function slide_left() {
    if (!sliderBlocked) {
        sliderBlocked = true;
        let slides2 = document.querySelectorAll('.slide_single');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*830 - 830 +'px';
            offset2 += 1;
        }
        current += 1;
        if (current >= slides.length) {
            current = 0;
        }
        if (current === 1) {
            document.getElementById('slider-wrapper').classList.add('bgBlue');
        } else {
            document.getElementById('slider-wrapper').classList.remove('bgBlue');
        }
    }   
}

function slide_right() {
    if (!sliderBlocked) {
        sliderBlocked = true;
        let slides2 = document.querySelectorAll('.slide_single');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*830 + 830 +'px';
            offset2 += 1;
        }
        current += 1;
        if (current >= slides.length) {
            current = 0;
        }
        if (current === 1) {
            document.getElementById('slider-wrapper').classList.add('bgBlue');
        } else {
            document.getElementById('slider-wrapper').classList.remove('bgBlue');
        }
    } 
}
SLIDER.addEventListener('transitionend', function () {
    slider_init();
    sliderBlocked = false;
});
document.getElementById('arrow_left').addEventListener('click', slide_right);
document.getElementById('arrow_right').addEventListener('click', slide_left);
slider_init();

/* Slider displays*/

var display = document.querySelector('.iPhone_Vert')
var displ = document.querySelector('.iPhone_Hor')

display.addEventListener('click', event => {   
    display.classList.toggle('display-off');       
});

displ.addEventListener('click', event => {   
    displ.classList.toggle('display-off');       
});

//Смена картинок

var list = document.getElementById('list-portfolio')
var links=list.getElementsByClassName('portfolio-nav__link') 
var pic = document.getElementsByClassName ('portfolio-photo');

list.addEventListener('click', (event)=>{

   [...links].forEach(element => {element.classList.remove('portfolio-nav__link_active') });
    event.target.classList.add('portfolio-nav__link_active');

   for (let i=0;i<pic.length-1; i++) {    
     [pic[i].src, pic[i+1].src] = [pic[i+1].src, pic[i].src]
   }
})

var p;

for (let p of pic) {
    p.addEventListener('click', (event) => {

        [...pic].forEach(element => {element.classList.remove('portfolio-photo_active') });
        event.target.classList.add('portfolio-photo_active');
    
})}

//PopUp

var btn=document.getElementById('btn')
var btnClose=document.getElementById('close-button')

btn.addEventListener('click', ()=>{
    event.preventDefault();
    var subject = document.getElementById('subject').value.toString();
    var describe = document.getElementById('describe').value.toString()
    var sub =document.getElementById('result');

    if ((subject !='') || (describe !='')){
        sub.textContent = 'Тема: ' + subject + describe
    } 
    else {
        sub.textContent = 'Без темы'
    };

    document.getElementById('PopUp').classList.remove('hidden') 
})
 

btnClose.addEventListener('click', ()=>{
    document.getElementById('result').innerText="";
    document.getElementById('PopUp').classList.add('hidden');
    document.getElementById('myForm').reset() 
})
 




