$(function () {
     "use strict";
    // ---- Text Effect
    $('.tlt').textillate();
    // ---- Skill bar
    jQuery('.skillbar').each(function() {
        jQuery(this).appear(function() {
            jQuery(this).find('.count-bar').animate({
                width:jQuery(this).attr('data-percent')
            },3000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
        });
    });	
    // ---- WoW JS
    new WOW().init();
    // ---- filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // ---- change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        });
    });
    // ---- PopUp 
    $('.parent-container').magnificPopup({
        delegate: 'a', 
        type: 'image',
    });
    // ---- Owl Carousel
    $("#owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        items : 1,
        autoPlay:true
 
   });
    // ---- Rating
    $(".my-rating").starRating({
        starSize: 15,
        initialRating:4.5,
        callback: function(currentRating, $el){
        }
    });
    // ---- Owl Carousel
    var owl = $("#team-owl-demo");
    owl.owlCarousel({
      autoPlay:true,
      itemsCustom : [
        [0, 2],
        [450, 1],
        [600, 2],
        [700, 2],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ]
    });
    // ----- Counter
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    // ----- Menu
    $('#menu').slicknav();
    // ----- Smooth Scroll Menu
    $('#menu a[href*="#"]:not([href="#"])').on("click" , function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
        }
    });
    // ----- Smooth Scroll Btn
    $('.mouse-btn a[href*="#"]:not([href="#"])').on("click" , function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
        }
    });
    // ----- Scroll To Top
    var top_0 = {scrollTop:0};
    var topClass = $(".scrolltotop i");
    topClass.on("click" , function(e){
        $("html,body").animate(top_0,1000);
    });
    $(window).scroll(function() {
        if($(this).scrollTop() > 400) {
            topClass.fadeIn(500);
        }
        else {
            topClass.fadeOut(500);
        }
    });

    /***
      Preloader
    ***/
    $('body').addClass('preloader-active');

    $(window).on('load', function() { 
      $('.preloader').fadeOut();
      $('.preloader-spinner').delay(350).fadeOut('slow');
      $('body').removeClass('preloader-active');
    });

    var mixer = mixitup('.parent-container');

    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#stickyheader').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#stickyheader').css({position: 'fixed', top: '0px'});
            $('#stickyalias').css('display', 'block');
            $('#stickyheader').addClass('fix-top');
        } else {
            $('#stickyheader').css({position: 'static', top: '0px'});
            $('#stickyalias').css('display', 'none');
            $('#stickyheader').removeClass('fix-top');
        }
    });

    //Nav menu active class change
    var lastId
        , topMenu = $("#menu")
        , topMenuHeight = topMenu.outerHeight() + 15
        ,menuItems = topMenu.find("a")
        ,scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind to scroll
    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop) return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
})