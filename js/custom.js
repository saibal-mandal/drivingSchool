/*==loder js==*/
$(window).load(function() {
    $(".loader").delay("400") .fadeOut("400");
});

//scroll to top 
$(window).scroll(function(){
  if($(this).scrollTop()>150){
    $('.scrollup').fadeIn();
  }else{
    $('.scrollup').fadeOut();
    }
  });
$('.scrollup').click(function(){
  $("html, body").animate({scrollTop:0}, 600)
  return false;
  });
  
/*==humberger menu js==*/
(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('.bar-collapse'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded2');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  //hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
/*==humberger menu js==*/

/*==banner slider js==*/
  $('.banner').owlCarousel({
    loop:true,
    margin:10,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    paginationSpeed : 800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*==Essential Driving slider js==*/
  $('.EssentialDriving').owlCarousel({
    loop:true,
    margin:10,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    paginationSpeed : 800,
    animateIn: 'zoomIn',
    animateOut: 'zoomOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


/*==advocate slider js==*/
  $('.advocate-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    paginationSpeed : 800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

/*==blog slider js==*/
  $('.blog-slider').owlCarousel({
    loop:true,
    margin:10,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed: 950,
    slideSpeed : 400,
    paginationSpeed : 800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/*------------------
listview color js
----------------*/
$(document).ready(function(){
  $(".viewbar").click(function(){
    $(".viewbar").removeClass("active");
    $(this).addClass("active");
  });
}); 



$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    });

     

});


//register js
$(document).ready(function(){
  $(".register").click(function(){
    $(".register-frm").show(800);
    $(this).hide(300);
  });
  
  $(".close-btn").click(function(){
    $(".register").show(800);
    $(".register-frm").hide(300);
  });
}); 



// modal show hide
 $(document).ready(function(){
     
     $('.btn-login').click( function(){
          $('#loginModal').modal('show');
          $('#registerModal').modal('hide');
         }); 
         
     $('.btn-register').click( function(){
         $('#loginModal').modal('hide');
         $('#registerModal').modal('show');
         }); 
     
             
     });