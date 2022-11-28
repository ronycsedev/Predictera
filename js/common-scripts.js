(function ($) {
    $(function () {

            $('.hamburger').click(function () {
                $("body").toggleClass("navShown");
                $(".nav-wrap").fadeToggle();
            });

            $('.cookies-btn-wrap a').click(function (e) {
                e.preventDefault()
                $('.cookies-wrap').hide();
            });
        
        
            var headerHeight = $('.main-header-section').outerHeight();
            $(".scroll-down").click(function() {
                $('html, body').animate({
                    scrollTop: $(".company-info").offset().top - headerHeight
                }, 1000);
            });
        

            if ($('.content-slider-wrap').length) {
                $('.content-slider-wrap').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: false,
                    fade:true,
                    asNavFor: '.thumb-slider-wrap',
                  
                })
    
                $(window).on('resize', function () {
                    $('.content-slider-wrap').slick('resize');
                });
            }
    
            if ($('.thumb-slider-wrap').length) {
                $('.thumb-slider-wrap').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: false,
                    asNavFor: '.content-slider-wrap',
                    responsive: [
                        {
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true
                            }
                        },
                        {
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true
                            }
                        }
                    ]
                })
    
                $(window).on('resize', function () {
                    $('.thumb-slider-wrap').slick('resize');
                });
            }
    
            


            
        

    }) // End ready function.

})(jQuery)