jQuery(document).ready(function(){
  $(".menu_div").click(function(){
    $(".toplmenu").hide();
    $(".toplmenu1").show();
    $(".mobilemenu").css('left','0px');
    $(".mobilemenu").fadeIn(500);
  });
  $(".menu_icn").click(function(){
    $(".toplmenu").show();
    $(".toplmenu1").hide();
    $(".mobilemenu").fadeOut(600);
  });
});

$('.cust_slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },{
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  }]
});