$(function(){

    function slide(){
        $('.slideList').animate({top:-550},function(){
            $('.slideList > div:first').appendTo('.slideList');
            $('.slideList').css({top:0});
        });
    };

    setInterval(slide,3000);
    // 3초 간격으로 슬라이드를 돌려준다


});