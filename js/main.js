$(document).ready(function(){
	
	$('.slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 470,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	
 	
	
	if($(window).width()>800){
	   new WOW().init();
	}
	$("nav li, .logo").click(function(){
		var target = $(this).attr('data-href');
        $('html, body').animate({scrollTop: $(target).offset().top-30}, 1300);
        return false;
	});

	 $(window).scroll(function() {  
	    if ($(this).scrollTop()>1) $('nav').addClass('scrolling');  
	         else $('nav').removeClass('scrolling');  
	}); 

	$('.fancybox-thumb').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	$('.view').magnificPopup({
	  mainClass: 'mfp-zoom-in',
	  callbacks: {
	    beforeClose: function() {
	        this.content.addClass('hinge');
	    }, 
	    close: function() {
	        this.content.removeClass('hinge'); 
	    }
	  },
	  midClick: true
	});
	$('.btn').magnificPopup({
	  mainClass: 'mfp-zoom-in',
	  callbacks: {
	    beforeClose: function() {
	        this.content.addClass('hinge');
	    }, 
	    close: function() {
	        this.content.removeClass('hinge'); 
	    }
	  },
	  midClick: true
	});

	$('.burger, nav li').click(function(){
		$('nav ul').slideToggle('slow');
	});

});


	