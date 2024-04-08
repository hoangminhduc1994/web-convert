$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
 autoplay:true,
 autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1000:{
          items:4
      }
  }
})



$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $(".fa-chevron-left").click(function(){
      $(".owl-carousel").trigger("prev.owl.carousel");
    });
  
    $(".fa-chevron-right").click(function(){
      $(".owl-carousel").trigger("next.owl.carousel");
    });})