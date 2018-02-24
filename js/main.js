$( document ).ready(function() {
    
    // navigation main menu toggle
    
    $("#ham_menu").click(function(){
        $("nav").slideToggle("slow");
    });
    
    // Back to top
    
    $(".bcktop").click(function () {
       $("html, body").animate({scrollTop: 0}, 2000);
    });

    // main slider
    
    $('#main_slider').slick({
        dots: true
        
    });
    // slider projects
    $('#slide_projects').slick();
    
    //slider our clients
    $('#block_oc').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 480,
            settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // slider who we are
    
    $('#block_wwa').slick({
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
            settings: {
//                    rows: 2,
//                    slidesPerRow: 3,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // color images to b&w
    
    $( ".wwa_content, .sm_img_wrap" ).mouseover(function() {
        $(this).find('.color').show();
        $(this).find('.gray').hide();
    }).mouseout(function() {
        $(this).find('.color').hide();
        $(this).find('.gray').show();
    });
  
});// END document ready






