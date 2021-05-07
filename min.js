
$(document).ready(function(){
	// fade menu
	$('.drop').hover(function() {
	$('.dropdown').fadeToggle(1000);

})
	// carousel
		$('.reel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				
	// scroll
$('.btn-circle').click(function(){
	let target=$(this).attr('href')
		 $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
	})
// fadeIn section
$(window).scroll(function(){
	 if($(this).scrollTop() >= 1909 & $(this).scrollTop() <=2241){
	 	$('.top-right').addClass('animate__fadeInTopRight')
	 	$('.top-left').addClass('animate__fadeInTopLeft')
	 	$('.bottom-left').addClass('animate__fadeInBottomLeft')
	 }
})
// show rsponsive menu
$('.menu-button').click(function(){
	$('.change').toggleClass('active')
})

})

