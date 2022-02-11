$(function(){
    $("li").click(function(){
     
        $(this).toggleClass("checked", $(this).index());

    })
})