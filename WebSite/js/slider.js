var currentSlide = 1;
        var $slider = $(".slides");
        var slideCount = $slider.children().length;
        var slideTime = 2000;
        var animationTime = 800;

        setInterval(function() {
            $slider.animate({
            marginLeft : '-=745px'
            } ,  animationTime , function() {
            currentSlide ++;
            if(currentSlide == slideCount){
                currentSlide = 1;
                $(this).css("margin-left" , "0px")
            }
            });
            } , slideTime);