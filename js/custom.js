<<<<<<< HEAD
var barIcon = document.querySelector('nav .fa-bars');
var myLinks = document.querySelector('.myLinks');
// barIcon.onclick = function() {


//     if (myLinks.style.display === "block") {
//         myLinks.style.display = "none";
//     } else {
//         myLinks.style.display = "block";
//     }
// }


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
=======
var barIcon = document.querySelector('nav .fa-bars');
var myLinks = document.querySelector('.myLinks');
// barIcon.onclick = function() {


//     if (myLinks.style.display === "block") {
//         myLinks.style.display = "none";
//     } else {
//         myLinks.style.display = "block";
//     }
// }


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
>>>>>>> 4a8e91d13efa0ef312ba3d31aeb3d4330e08915e
});