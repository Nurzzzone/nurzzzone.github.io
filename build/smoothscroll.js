$(document).ready(function() {
    // smootj scroll
    var scrollLink = $('.scroll');
    var scroll = $(window).scrollTop();
    var firstSection = $('.home').outerHeight();
    
    scrollLink.click(function(e) {
      e.preventDefault();

      $('body, html').animate({
        scrollTop: $(this.hash).offset().top
      }, 800 );
    });

    // active menu button
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        
        scrollLink.each(function() {
          
          var sectionOffset = $(this.hash).offset().top - 20;
          
          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active__menu-btn');
            $(this).parent().siblings().removeClass('active__menu-btn');
          }
        })
      });

    // fixed header
    if($(window).width() > 840) {
      $(window).scroll(function() {
        var header = $('.header');
        var scroll = $(window).scrollTop();
        var firstSection = $('.home').outerHeight();
  
        if (scroll >= firstSection) {
        header.addClass('fixed')
        } else {
        header.removeClass('fixed')}
        
        if (scroll >= firstSection) {
        header.addClass("in-view");
        } else {
        header.removeClass("in-view")}
      });  
    } 
    // mobile menu
    $('#open-btn').click(function() {
      $('.inner__header').toggleClass('inner__header--active');
    })
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var firstSection = $('.home').outerHeight();

      if(scroll >= firstSection) {
        $('.burger-menu').css({
          backgroundColor: 'black',
        })
      } else {
        $('.burger-menu').css({
          backgroundColor: 'transparent',
        })
      }
    })

});

