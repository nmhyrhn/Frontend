// $(function () {
//     $('.tmenu').click(function () {
//         $('.tmenu').addClass('.current');
//         $
//     });
// });


$(function () {

    $('.tmenu').click(function (e) {
        e.preventDefault();
        var tabs = $(this).attr('data-tab');

        $('.tmenu').removeClass('current');
        $('.tabcont').removeClass('current');

        $(this).addClass('current');
        $('#' + tabs).addClass('current');

    });
});