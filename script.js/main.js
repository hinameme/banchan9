$(function(){
    $('.menuBotton').on("click",function(){
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        $('#mask').toggleClass('active')
    });
});