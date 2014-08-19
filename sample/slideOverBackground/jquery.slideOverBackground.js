/**
 * jQuery slideOverBackground Plugin (jquery.slideOverBackground.js)
 * @version 1.0.0
 * @author Thomas Perraudin <softwares@perraudin.fr>
 * @website http://thomas.perraudin.fr
 * @license MIT
 */

(function($) {
  $.fn.slideOverBackground = function(properties) {
    if(typeof(properties)=="undefined" || Object.keys(properties).length==0 || typeof(properties.pictures)=="undefined" || properties.pictures.length==0){
      console.log("Missing properties : { pictures: [\"img1.png\", \"img2.png\"] , delay: 5000, transitionTime: 1000 }");
      return false;
    }
    if(typeof(properties.delay)=="undefined") properties.delay = 5000;
    if(typeof(properties.transitionTime)=="undefined") properties.transitionTime = 1000;
    
    $(this).addClass("slideOverForeground");
    jqWrapper = $("<div class='slideOverBackground-wrapper'></div>");
    jqStaticImg = $("<img class='slideOverBackground' src=\""+ properties.pictures[0] +"\" />");
    jqTransitionImg = $("<img class='slideOverBackgroundTrantision' src=\""+ properties.pictures[1] +"\" />");
    jqWrapper.append(jqStaticImg).append(jqTransitionImg).append($(this).clone());
    $(this).before(jqWrapper).remove();
    
    var i = 1;
    changeBG = function slideOverBackgroundChange(){
      console.log("Sliding new background");
      i++;
      if(typeof(properties.pictures[i])=="undefined") i = 0;
      jqTransitionImg.animate({left: "0%"}, properties.transitionTime, "swing", function(){
        jqStaticImg.attr("src", jqTransitionImg.attr("src"));
        jqTransitionImg.css({left: "100%"});
        jqTransitionImg.attr("src", properties.pictures[i]);
      });
    };
    setInterval(changeBG, properties.delay);
  }
}(jQuery));