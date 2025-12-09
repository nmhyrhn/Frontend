$(document).ready(function () {
  $('.cont ul li').click(function () {
    $(this).parent().accClass("active")
    .siblings().removeClass('active');
    return false;
  });
});