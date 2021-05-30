
//adding class active when clicking on menu button.
$(document).ready(function() {
    $('.open-btn').click(function() {
        $('.menu-open').addClass('active')
        //adding overlay-active when clicking menu button.
        $('.overlay').addClass('overlay-active')
    });

    //close the menu by removing active class
    $('.close-btn').click(function() {
        $('.menu-open').removeClass('active')
        //removing overlay-active when closing menu.
        $('.overlay').removeClass('overlay-active')
    });

    //close the menu when clicking on overlay area.
    $('.overlay').click(function() {
        $('.menu-open').removeClass('active')
        $('.overlay').removeClass('overlay-active')
    });
});


//
$(".owl-carousel").owlCarousel({
    loop:true,
    dot: false,
    responsiveClass:true,
    responsive:{
        0:{
            loop:false,
            items:1,
            nav:false
        },
        600:{
            items:2,
            loop:false
        },
        768:{
            loop:false,
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  
    //next
    $('.owl-next').click(function() {
        $(".owl-carousel").trigger('next.owl.carousel');
    })

    //prev
    $('.owl-prev').click(function() {
        $(".owl-carousel").trigger('prev.owl.carousel');
    })
  });
