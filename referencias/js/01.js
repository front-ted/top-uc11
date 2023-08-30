$('.descricao').hide()
$('.card-1').click(function(){
    if($(this).children('.descricao').css('display')=='none'){
    $(this).children('.descricao').fadeIn()
    } else {
        $(this).children('.descricao').fadeOut()
    }
})
$('.card-2').click(function(){
    if($(this).children('.descricao').css('display')=='none'){
    $(this).children('.descricao').fadeIn()
    if($(window).width() < 600){
        $('.card-2').css('margin-bottom', '200px')
    }
    } else {
        $(this).children('.descricao').fadeOut()
        if($(window).width() < 600){
            $(this).css('margin-bottom', '20px')
        }
    }
})

$("#iniciar").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#ate-aqui").offset().top
    }, 2000);
});
$(".toTop").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#topo").offset().top
    }, 2000);
});