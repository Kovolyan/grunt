$(document).ready(function(){
  $('.slickk').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });



  $('.fa-list-ul').click(function() {

      $('.navigation').slideToggle(500);

    });

 


    $( "#tabs" ).tabs();
  

     var selectBox = $("select").selectBoxIt();


$("news_p").dotdotdot({
    

  });
     
});

         

