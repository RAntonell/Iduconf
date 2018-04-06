

$(function () {
  $(".js-tab-content").hide();
  $(".js-tab-content:first").show();
  if($( window ).width() < 992) {
    $('.header__nav').hide()
  }


  /*tabs(if in tab mode)*/

  $(".js-tab").click(function(event) {
    event.preventDefault();

    $(".js-tab-content").slideUp();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).slideDown();

    $(".js-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-tab-accordion").removeClass("is-active");
  $(".js-tab-accordion[rel^='"+activeTab+"']").addClass("is-active");
  });

  /* tabs(if in accordion mode)*/

  $(".js-tab-accordion").click(function(event) {
    event.preventDefault();

    $(".js-tab-content").slideUp();
    var accordion_activeTab = $(this).attr("rel");
    $("#"+accordion_activeTab).slideDown();

    $(".js-tab-accordion").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-tab").removeClass("is-active");
    $(".js-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  });

  /*hamburger-manu*/

  $(".js-icon").click(function(event) {
    $(this).toggleClass('is-active')
    $('.header__nav').slideToggle('fast')
  });

  /*hamburger-manu(on-resize)*/

  $(window).resize(function() {
    var sWidth = $( window ).width();
    if(sWidth > 992) {
      $('.js-icon').removeClass('is-active');
      $('.header__nav').slideDown()
    } else if(sWidth < 992 && sWidth > 900) {
      $('.js-icon').removeClass('is-active');
      $('.header__nav').hide()
    }
  });


});
