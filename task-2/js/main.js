$(document).ready(function() {
$(".drop-menu").hide(); 

$(".parent").hover(
  function() {
    $(".drop-menu").fadeIn('fast'); 
  },
  function() {
    $(".drop-menu").fadeOut('fast'); 
  }
)});


