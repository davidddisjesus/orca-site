$(document).ready(function () {
    $("img").on("contextmenu",function(e){
      return false;
    });
    $("img").on("dragstart",function(e){
      return false;
    });
});