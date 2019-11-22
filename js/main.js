$(document).ready(function () {

    $(".resp-tab-item").click(function(){
        
        $(".resp-tab-item").removeClass('resp-tab-active')
        $(this).addClass('resp-tab-active')
	
            $('ul.tabs li').click(function(){
                var tab_id = $(this).attr('data-tab');
        
                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');
        
                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            })
    });

    $(".nav-item").click(function(){
        
        $(".nav-item").removeClass('active')
        $(this).addClass('active')
           
    });

});