$(document).ready(function() {
    $('.about-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        swipeToSlide: true,
        arrows: true,
        prevArrow: '<button class="btn-prev"><img class="btn-slider-arrow" src="./images/icons/fa-angle-left 1.svg" alt=""></button>',
        nextArrow: '<button class="btn-next"><img class="btn-slider-arrow" src="./images/icons/fa-angle-right.svg" alt=""></button>'
    });

    $('.clients__carousel').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        arrows: false,
        dots: true,
        dotsClass: 'clients__slider-nav',
        focusOnSelect: false
    });
  });