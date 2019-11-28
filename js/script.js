$(document).ready(function(){

    //initialising fullpage.js in the jQuery way
    $(".caja").click(function(element){
        $(this).addClass('show');
    })
    $('#fullpage').fullpage({
        sectionsColor: ['#ff5f45', '#ffffff', '#fc6c7c', '#62e4ce', '#62e4ce', '#ffffff', '#ffa86d', '#ffffff', '#85f368', '#ffffff'],
        navigation: true,
        slidesNavigation: true,
    });

    
 
});