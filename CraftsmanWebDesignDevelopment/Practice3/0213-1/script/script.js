//main을 hover했을시 sub메뉴가 다 내려오는 경우와 각각의 sub메뉴가 내려오는 경우
$(function(){
    $('.main').mouseenter(function(){
        //$('.sub, .sub-bg').stop().slideDown();
        $(this).find('.sub').stop().show();
    });
    $('.main').mouseleave(function(){
        //e.stopPropagation
        //$('.sub, .sub-bg').stop().slideUp();
        $(this).find('.sub').stop().hide();
    });
});