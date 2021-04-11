$(document).ready(function(){
    //menu icon change
    $('button.navbar-toggler').on('click',function(){
        $('.menu-icon').toggleClass('fa fa-bars fas fa-times');
    });

    //banner slider
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        infinite: true,
        dots: true,
    });

    //testimonial slider
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        dots: true,
        responsive: [
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
        ]
    });

    //filter and mixitup plugin code
    let mixer = mixitup('.filtering');


    //custom jquery code for functionalities
    let backToTop = $('#backToTop');
    let logo = $('.navbar .navbar-brand');
    let menu = $('.navbar');
    let html_body = $('html,body');
      
    $(window).on('scroll',function(){
        let scrolling = $(window).scrollTop();
          
        //sticky menu function
        if(scrolling > 120){
            menu.addClass('fixed-menu');
        }else{
            menu.removeClass('fixed-menu');
        }
          
        //back To Top hide/show function
        if(scrolling > 400){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
    });
      
    //back To Top click function
    backToTop.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },1200);

        $('.navbar .navbar-nav li.home').addClass('active').siblings().removeClass('active');
    });

    //click on logo
    logo.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },1200);

        $('.navbar .navbar-nav li.home').addClass('active').siblings().removeClass('active');
    });

    //smooth scroll and active menu button code
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function(){
        //add active class in nav item
        $(this).parent().addClass('active').siblings().removeClass('active');
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length){
                html_body.animate({
                    scrollTop: target.offset().top - 0
                },1000);
                return false;
            }
        }
    });


});