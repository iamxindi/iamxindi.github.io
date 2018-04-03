$(document).ready(function(){
  // $('nav').hide();
  $('#menu').on('click',function(){
    $('nav').slideToggle();
  })
  $('#litebox').on('mouseenter',function(){
    $('#litebox').children().children().attr('src','img/litebox-hover.png');
  }).on('mouseleave',function(){
    $('#litebox').children().children().attr('src','img/litebox.png').slideDown();
  })

})
