$( document ).ready(function() {
    
    //Loading
    $( "#loading" ).addClass("vivify driveOutTop");
    setTimeout( function(){
        $('#loading').css("display", "none");
    },1000);
    
    //Script para el menú lateral
    $("[data-toggle='toggle-menu']").click(function() {
        var selector = $(this).data("target");
        var selector = $(this).toggleClass('clicked');
        $('#toggle-nav').toggleClass('view-menu');
        $('#toggle-nav>*').toggleClass('vivify driveInLeft');
    });
    
    //Script para smooth scroll
    $('a[name="goto"]').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
    
});