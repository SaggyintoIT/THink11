
// 
AOS.init({
  offset: 100,
  duration: 500,
  easing: 'ease-in-sine',
})
document.addEventListener("mousemove", e => {
  AOS.refresh();
});
function fixHeader(){
  var scrTop=document.querySelector('html,body').scrollTop;
  var myHeader=document.getElementById('header');
  if(scrTop>0){
      myHeader.classList.add('fixed');
  }else{
      myHeader.classList.remove('fixed');
  }
}
window.onscroll=fixHeader;
window.onresize=function(){
  if(window.innerWidth>999){
      $('.menu_dropdown').slideDown();
  }
};
$(document).ready(function(){
  fixHeader();
  $('.sub_menu').click(function(){
      var menu=document.querySelectorAll('.drop .sub_menu');
      var ind=Number($(this).attr('data-index'));
      for(let i=0;i<menu.length;i++){
          if(i==ind){
              if($(this).hasClass('active')){
                  $(this).next('.menu_dropdown').slideUp();
                  $(this).removeClass('active');
              }else{
                  $(this).next('.menu_dropdown').slideDown();
                  $(this).addClass('active');
              }
          }else{
              $(menu[i]).removeClass('active');
              $(menu[i]).next('.menu_dropdown').slideUp();
          }
      }
  })
})
function menuToggle(ref){
  if(ref.classList.contains('active')){
      ref.classList.remove('active');
      document.getElementById('menulist').classList.remove('active');
         document.getElementById('header').classList.remove('active');
  }else{
      ref.classList.add('active');
      document.getElementById('menulist').classList.add('active');
       document.getElementById('header').classList.add('active');
  }
}

$(".sermenu-icoropdown").click(function() {   
  $(this).parent("li").toggleClass("active");  
  $(".sermenu-icoropdown").not(this).parent("li").removeClass("active");
});

jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.number_counter').offset().top,
        hH = jQuery('.number_counter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT + hH - wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.num_count').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 7000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) + ' ');
                }
            });
        });
    }
}
$(document).ready(function(){
  var interleaveOffset = 0.5;
var listArray = ["Top Web Development","Top App Development","Digital Marketing","Search Engine Optimization"];
var mySwiper = new Swiper('.swiper-container', {
// Optional parameters
      loop: true,
      autoplayDisableOnInteraction: false,
      slidesPerView: 1,        
      autoHeight: true,
      speed: 1000,
      lazyLoad: 'progressive',
      parallax: true,
      autoplay: {
          delay: 3000,
      }, 
 
      pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
          type: 'bullets',
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
            },
      
      },
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

});

var interleaveOffset = 0.5;
var listArray = ["2024","2023","2022","2021"];
var mySwiper = new Swiper('.timelineslider', {
// Optional parameters
      loop: false,
      autoplayDisableOnInteraction: false,
      slidesPerView: 1,        
      autoHeight: true,
      speed: 1000,
      lazyLoad: 'progressive',
      parallax: false,
      autoplay: {
          delay: 3000,
      }, 
 
      pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
          type: 'bullets',
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
            },
      
      },
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

});



new Swiper(".industries-section", {
  spaceBetween: 1,
  speed: 3500,
  loop: true,
  allowTouchMove: true,   autoplaySpeed: 5000,
  autoplay: true,
  disableOnInteraction: true,
  
  breakpoints: {
      1920: {
          slidesPerView: 4,
      },
  
      992: {
          slidesPerView: 4,
      },
      768: {
          slidesPerView: 2,
      },
      576: {
          slidesPerView: 1,
      },
      0: {
          slidesPerView: 1,
      }
  }
});


$('#clientSwipera').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true, arrows: false,
  dots: false,
  autoplaySpeed: 0,
  speed: 4000,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});


});

$(document).ready(function(){
  $('.ourwork-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    loop:true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });
});


$(document).ready(function(){
  $('.talentedteam-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    loop:true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  }
]
  });
});

$(document).ready(function(){
  $('.testimonial-slider').slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    loop:true,
    speed: 300, 
    autoplaySpeed: 5000,
    autoplay: true,
    
    
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2.5,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
  
]
  });
  
  $(".prev-btn").click(function () {
		$(".testimonial-slider").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".testimonial-slider").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".testimonial-slider").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
});

$(document).ready(function(){
  $('.webappdev').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    loop:true,
    speed: 300, 
    autoplaySpeed: 5000,
    autoplay: true,
    
    
    responsive: [
  {
    breakpoint: 991,
  settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
  
]
  });
  
  $(".prev-btn").click(function () {
		$(".webappdev").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".webappdev").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".webappdev").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
});



$(document).ready(function(){
  $('.eventsfestivals').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    loop:true,
    speed: 300, 
    autoplaySpeed: 5000,
    autoplay: true,
    
 
  });
  
  $(".prev-btn").click(function () {
		$(".eventsfestivals").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".eventsfestivals").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".eventsfestivals").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
});

$(document).ready(function(){
  $('.talentedcareer').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    loop:true,
    speed: 300, 
    autoplaySpeed: 5000,
    autoplay: true,  
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
  
]
  });
  
  $(".prev-btn").click(function () {
		$(".talentedcareer").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".talentedcareer").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".talentedcareer").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
});


var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');  
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');  
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),  
  prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  speed: 1000,
  arrows: true,
  dots: true,
  focusOnSelect: true,
  prevArrow: '<button class="com-btn lefta"> <span><img src="images/left.png"> </span></button>',
  nextArrow: '<button class="com-btn righta"> <span><img src="images/right.png"> </span></button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  /*infinite: false,*/
});


$(document).ready(function () {
  // Function to open the popup
  function openPopup() {
      $('.closable_pop').css('display', 'flex'); // Show the popup
  }

  // Automatically open the popup after 7 seconds
  setTimeout(openPopup, 9000);

  // Function to close the popup when the close button is clicked
  $('.close-pop').click(function () {
      $(this).closest('.closable_pop').css('display', 'none'); // Fade out the popup
  });

  // Function to close the popup when the overlay outside the popup is clicked
  $('.closable_pop').click(function (e) {
      if ($(e.target).hasClass('pop_overlay')) {
          $(this).css('display', 'none'); // Fade out the popup
      }
  });
});



// -----Country Code Selection
$("#mobile_code").intlTelInput({
  initialCountry: "in",
  separateDialCode: true,
});
$("#mobile_codepopup").intlTelInput({
  initialCountry: "in",
  separateDialCode: true,
});


const buttons = document.querySelectorAll('.btnhoverimg')
const stage   = document.querySelector('#background-panel')

buttons.forEach(button => {
  button.onmouseover = function() {
    document.querySelector(button.dataset.show).style.opacity = 1
  }
  button.onmouseout = function() {
    document.querySelector(button.dataset.show).style.opacity = 0
  }
})





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
      delay: 7000,
  }, 
  pagination: {
    el: ".swiper2-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
     
    },
    "@0.75": {
      slidesPerView: 2,
     
    },
    "@1.00": {
      slidesPerView: 3,
     
    },
    "@1.50": {
      slidesPerView: 6,
     
    },
  },
});

var menu = ['Video Analytics Solution', 'Asset Management Solution', 'Managed Services', 'HR Solution', 'Point of Sale System', 'E-Commerce Solution']
var mySwiper = new Swiper ('.swiper-tabslider', {
  // If we need pagination
  pagination: {
    el: '.swiper-paginationtab',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },
 
})


var $swiperSelector = $('.swiper-services');
$swiperSelector.each(function(index) {
  var $this = $(this);
  $this.addClass('swiper-slider-' + index);
  
  var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50;
  var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
  var loop = $this.data('loop') ? $this.data('loop') : false;
  var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 2.5;
  var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 2.5;
  var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 1.5;
  var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 25;

  var swiper = new Swiper('.swiper-slider-' + index, {
    direction: 'horizontal',
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop
      },
      992: {
        slidesPerView: slidesTablet
      },
      320: {
         slidesPerView: slidesMobile
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: dragSize
    }
 });
});

/* drop down menu less than 991px */
if ($(window).width() < 999) {
  $("#menu-consulting").appendTo(".serdrop-consulting");
  $("#menu-technology").appendTo(".serdrop-technology");
  $("#menu-infrastructure").appendTo(".serdrop-infrastructure");
  $("#menu-outsourcing").appendTo(".serdrop-outsourcing");
  $("#menu-business-solutins").appendTo(".soldrop-busisolu");
  $("#menu-enterprise-solutions").appendTo(".soldrop-entersolu");
  $("#menu-egovernance-solutions").appendTo(".soldrop-egoversolu");
  $(".firtitlemain").attr("href", "javascript:void(0)");
  $(".firtitlemain").click(function() {
      $(this).next(".tab-pane").slideToggle();
      $(".firtitlemain").not(this).next(".tab-pane").slideUp();
      $(this).toggleClass("efactive");
      $(".firtitlemain").not(this).removeClass("efactive");
  });
  $(".menubox .firtitle").click(function() {
      $(this).parent("h5").next("ul").slideToggle();
      $(".menubox .firtitle").not(this).parent("h5").next("ul").slideUp();
      $(this).toggleClass("efactive");
      $(".menubox .firtitle").not(this).removeClass("efactive");
  });
}



// Culinary Slider


$("#vertical-menu a").click(function () {
  //slide up all the link lists
  $("#vertical-menu ul ul").slideUp();
  $('.plus', this).html('+');
  //slide down the link list below the h3 clicked - only if its closed
  if (!$(this).next().is(":visible")) {
      $(this).next().slideDown();
      //$(this).remove("span").append('<span class="minus">-</span>');
      $('.plus').html('+');
      $('.plus', this).html('-');
  }
})


  // *******************************************************************************
    // We Slider
    // *******************************************************************************

    new Swiper(".we-serve__slider", {
      slidesPerView: "auto",      
      spaceBetween: 0,      
      dots: true,
      
      navigation: {
          nextEl: ".we-serve__slider-button-next",
          prevEl: ".we-serve__slider-button-prev",
      },
      breakpoints: {
          992: {
              spaceBetween: 10,
              dots: true,
          },
          1366: {
              spaceBetween: 30,
          },
      },
  });

  $('#CaseStudySlider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, arrows: false,
    dots: false,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: 'linear'
  });




// Gallery



 var portfolioIsotope = $('.portfolio-container').isotope({
   itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
 });

$('#gallery-flter li').on('click', function () {
  $("#gallery-flter li").removeClass('active');
  $(this).addClass('active');
  portfolioIsotope.isotope({filter: $(this).data('filter')});
});