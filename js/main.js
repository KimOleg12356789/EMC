$(document).ready(function(){
    
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });






    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.mt-mobile');
    const body = document.querySelector('body');
  
    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        body.classList.toggle('body-open');
        burger.classList.toggle('burger-open');
        
    });

    $( document ).ready(function(){
        jQuery('.scroll').onePgaeNav({
          wrapper : '#onePgaeNav'
        });
      });  

    (function( $ ) {
    
    $.fn.onePgaeNav = function( options ){

        var settings = $.extend({
            activeClass     : 'active',
            wrapper         : '',       // Nav wrapper selector for scroll effect
            speed           : 900,      // animation speed
            navStop         : 100,      // stop before top
            navStart        : 200,      // change class before navstart pixel

        }, options ),
        $that = $(this);

        $(this).on( 'click' , clickScroll );

        if (settings.wrapper) {
            $(window).on('scroll',function(){
                var sectionTop  = [],
                windowTop   = $(window).scrollTop();

                $that.each(function(){
                    var hash = $(this).attr('href'),
                        hashOffset = $( hash ).offset();
                    if (typeof hashOffset !== 'undefined' ) {
                        sectionTop.push( hashOffset.top);
                    };
                });

                $.each( sectionTop, function(index){
                    if ( windowTop > sectionTop[index] - settings.navStart ){
                        $that.removeClass(settings.activeClass)
                            .eq(index).addClass(settings.activeClass);
                    }
                });
            });
        };

        function clickScroll(event){
            event.preventDefault();

            var hash        = $(this).attr('href'),
                hashOffset  = $(hash).offset(),
                hashTop     = hashOffset.top;

            $('html, body').animate({
                scrollTop: hashTop - settings.navStop
            }, settings.speed);
        }

    };

    }(jQuery));

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})


});