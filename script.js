//Переключение активного пункта меню
var menu = document.getElementById('list')
var items=menu.getElementsByClassName('nav__link') 

menu.addEventListener('click', (event)=>{

   [...items].forEach(element => {element.classList.remove('nav__link_active') });
    event.target.classList.add('nav__link_active') 
})

//Переключение слайдер

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item-img");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block";    
}


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
    sub.innerText="Тема:" + subject;    
    document.getElementById('PopUp').classList.remove('hidden') 
})
 

btnClose.addEventListener('click', ()=>{

    document.getElementById('result').innerText="";
    document.getElementById('PopUp').classList.add('hidden');
    document.getElementById('myForm').reset() 
})
 
