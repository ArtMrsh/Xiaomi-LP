var list = document.getElementsByClassName("nav-item");

for(var i = 0; i < list.length; i++) {
   list[i].onmouseover = function () {
      this.classList.add("marker")
   }
   list[i].onmouseout = function () {
      this.classList.remove("marker")
   }
}

var handle = document.querySelector(".handle");
var nav = document.querySelector(".nav-list");

handle.onclick = function () {
   nav.classList.toggle("show-nav")
}
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
     loop: true,
     items: 1,
     smartSpeed: 700,
     navigation: true,
     remindNav: true,
     navText: ["<img src='img/arrleft.png'>","<img src='img/arrright.png'>"]
 });
});
