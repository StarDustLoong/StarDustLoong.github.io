$(function(){
  $(".fade-img video:not(:first-child)").hide();
  setInterval(function() {
    $(".fade-img video:first-child").fadeOut("slow").next("video").fadeIn("slow").end().appendTo(".fade-img");
  },8000);
});