$(document).ready(function(){
    $('#menu-button').on('click',function(){
      $('nav').slideToggle();
    });
    $('#logo').on('mouseenter',function(){
      $('#logo').attr("src","img/icon-small-reverse.png");
    }).on('mouseleave',function(){
      $('#logo').attr("src","img/icon-small.png");
    });

})
