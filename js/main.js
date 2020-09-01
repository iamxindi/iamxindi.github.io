// $(document).ready(function(){
//   // $('nav').hide();
//   $('#litebox').on('mouseenter',function(){
//     $('#litebox').children().children().attr('src','img/litebox-hover.png');
//   }).on('mouseleave',function(){
//     $('#litebox').children().children().attr('src','img/litebox.png').slideDown();
//   })
// })
// Old JS

function toggleDark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var toggleButton = document.getElementById("toggleDark-button");
  toggleButton.classList.toggle("light-button");
  if (toggleButton.innerHTML === "Dark Mode") {
      toggleButton.innerHTML = "Light Mode";
    } else {
      toggleButton.innerHTML = "Dark Mode";
}
}
