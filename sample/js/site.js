
$(document).ready(function(){

  //slideOverBackground initialization
  $("#mainElement").slideOverBackground({
    pictures: ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg"],  //list of background images
    delay: 5000, //delay between transitions (optional)
    transitionTime: 1000 //time of transition (optional)
  });
    
});