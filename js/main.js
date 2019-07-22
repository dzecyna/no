$(document).ready(function() {


    $("#play").on("click",function(){
        $('.popup,.popup_overlay').fadeIn(700);
    });

    $(".closer,.popup_overlay").click(function(){
        $(".popup,.popup_overlay").fadeOut(500);
    });


    $(document).on('scroll', function (){
        let positionWindow = $(document).scrollTop();
        let windowheight = $(window).height();
        let bottomWindow = positionWindow + windowheight;
        let positionElement = $('.about-us').offset().top;
        let positionElements = $('.companents').offset().top;
        let positionElement1 = $('.information').offset().top;
        let positionElement2 = $('.footer').offset().top;


        if(bottomWindow > positionElement){
            $(".about-us").addClass('active')
        }

        if(bottomWindow > positionElements) {
            $(".companents").addClass('active')
        }

        if(bottomWindow > positionElement1) {
            $(".information").addClass('active')
        }

        if(bottomWindow > positionElement2) {
            $(".footer").addClass('active')
        }
    });
});