$(document).ready(function() {
    document.getElementById('mobile-menu-input').onclick = function() {
        if (this.checked) {
            document.body.classList.add('overflow');
        } else {
            document.body.classList.remove('overflow');
        }
    }

    $("#video").on("click",function(){
        $('.popup,.popup_overlay').fadeIn(700);
    });

    $(".closer,.popup_overlay").click(function(){
        $(".popup,.popup_overlay").fadeOut(500);
    });

    document.body.classList.add('visibility-shown');

    const slider = $(".slider");

    if (slider.length) {
        slider.slick()
    }

    new DG.OnOffSwitch({
        el: '#on-off-switch',
        textOn: 'Individual',
        textOff: 'Company',

    });




    $(document).on('scroll', function (){
        let positionWindow = $(document).scrollTop();
        let windowheight = $(window).height();
        let bottomWindow = positionWindow + windowheight;
        let positionElement = $('.features').offset().top;
        let positionElements = $('.feature').offset().top;
        let positionElement1 = $('.map-feature').offset().top;
        let positionElement2 = $('.interface').offset().top;
        let positionElement3 = $('.perfect-plan').offset().top;
        let positionElement4 = $('.footer').offset().top;

        if(bottomWindow > positionElement){
            $(".features").addClass('active')
        }

        if(bottomWindow > positionElements){
            $(".feature").addClass('active')
        }

        if(bottomWindow > positionElement1) {
            $(".map-feature").addClass('active')
        }

        if(bottomWindow > positionElement2) {
            $(".interface").addClass('active')
        }

        if(bottomWindow > positionElement3) {
            $(".perfect-plan").addClass('active')
        }

        if(bottomWindow > positionElement4) {
            $(".footer").addClass('active')
        }
    });
});
