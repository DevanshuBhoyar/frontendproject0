let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector(".navbar");


menu.onclick = ()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle("active")
}
// header section js ends here
window.onscroll = ()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove("active")
}
let ser=document.querySelector("#search-icon");
ser.onclick=()=>{
    document.querySelector("#search-form").classList.toggle('active');
}
document.querySelector("#close").onclick=()=>{
    document.querySelector("#search-form").classList.remove('active');
}


// header section
var swiper = new Swiper(".home-slider", {
     spaceBetween: 270, //this property for space between slides solve the problem of appereing of next slide text
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });
  
 /* review section starts here */
 var swiper = new Swiper(".review-slider", {
  spaceBetween:20 , //this property for space between slides solve the problem of appereing of next slide text
 centeredSlides: true,
 autoplay: {
   delay: 3000,
   disableOnInteraction: false,
 },
 loop:true,
 breakpoints: {
  0:{
    slidesPerView:1,
  },
  640:{
    slidesPerView:2,
  },
  768:{
    slidesPerView:2,
  },
  1024:{
    slidesPerView:3,
  },
 }
});
// let  section = document.querySelectorAll('section');
// let navLinks =document.querySelectorAll('header .navbar a');



// window.onscroll = ()=>{
// section.forEach(sec =>{
//   let top =window.scrollY;
//   let height =sec.offsetHeight;
//   let offset =sec.offsetTop - 150;
//   let id = sec.getAttribute('id');

// if(top => offset && top < offset + height){
// navLinks.forEach(links =>{
//   links.classList.remove('active');
//   document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
// });
// };
// });
// }