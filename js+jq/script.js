swiper = new Swiper('.swiper', {
    
    autoplay: {
        delay: 0,
    },

    freeMode: true,
    speed: 5000,
    loop: true,
    slidesPerView: 4.5,

});

swiper = new Swiper('.swiper__II', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    slidesPerView: 3,

});

swiper = new Swiper('.swiper__III', {

    pagination: {
        el: '.swiper-pagination',
        
        type: 'bullets',
        clickable: true,
    },

    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    
});

$(document).ready(function() {
    $('.block__nine__subtitle').click(function(event) {
        if($('.block__nine__items').hasClass('one')) {
           $('.block__nine__subtitle').not($(this)).removeClass('active');
           $('.block__nine__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
