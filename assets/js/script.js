$(document).ready(function(){

    // Open menu

    $(".icon-hamburger").click(function(){
      $("#mobile-sidemenu").toggle();
      $(".overlay").show();
      $( "body" ).prepend( "<div class='overlay'></div>" );
      $("body").css("position", "fixed");
    });

    // Close menu
    $(".icon-close").click(function(){
      $("#mobile-sidemenu").toggle();
      $(".overlay").remove();
      $("body").css("position", "");
    });
  });