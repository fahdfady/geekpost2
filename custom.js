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
});


var postBtn = document.querySelector('.create-post .btn');
var postTxt = document.querySelector('.create-post textarea');
var maxLength = 15;
var minLength = 0;
$('.create-post .btn').click(function () {

    var characterCount = $('.create-post textarea').val().length;

    /*This isn't entirely necessary, just playin around*/
    if (characterCount < 1) {
        alert("لا يمكنك النشر! المنشور فارغ");

    }
    else if (characterCount > 8000) {
        alert("لا يمكنك النشر! المنشور يتعدى ال8000 حرف");
    }
    else {
        $('.create-post textarea').val("");
        alert("تم النشر");
    }
})
