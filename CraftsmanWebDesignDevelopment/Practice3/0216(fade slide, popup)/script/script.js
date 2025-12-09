$(function(){

    // fade slider
    $('.slideList').children('div:gt(0)').hide();
    var current = 0;
    
    setInterval(
        function(){
            var next =(current + 1)% 3;
            $('.slideList').find('div').eq(current).fadeOut();
            $('.slideList').find('div').eq(next).fadeIn();
            current = next; //다음슬라이드배치
        }
        ,3000);

    // popup
    $('.pop').click(function(){
        $('#popup').show(600);
    });
    $('.close').click(function(){
        $('#popup').hide(400);
    });
});