$(document).ready(function(){
    $("a.scroll").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });
      
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
       arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('.slide-vk').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
       arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
   
});
