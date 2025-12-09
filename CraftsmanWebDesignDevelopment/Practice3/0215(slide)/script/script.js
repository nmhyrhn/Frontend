$(function(){

    function slide(){
        $('.slideList').animate({left:-1200},function(){
            $('.slideList > div:first').appendTo('.slideList');
            $('.slideList').css({left:0});
        });
    };

    setInterval(slide,3000);
    // 3초 간격으로 슬라이드를 돌려준다


});