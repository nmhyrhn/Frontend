$(document).ready(function(){

  /*클릭하면 <p> 요소 숨김*/
  $("p").click(function(){
    $(this).hide();
  });
  
  /*div 요소를 페이드인*/
  $("button").click(function(){
    $("#div").fadeIn("slow");
  });
  
  /*버튼을 클릭하면 p 요소 내용이 슬라이드 업*/
  $(".btn").click(function(){
    $("p").slideUp(1000);
  });
})