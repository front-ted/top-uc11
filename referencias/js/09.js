$('#btn-4').click(function () {
    $('.painel-img').css('background-image', 'url("assets/09/painel03.png")')
})
$('#btn-5').click(function () {
    $('.painel-img').css('background-image', 'url("assets/09/painel04.png")')
})
$('#btn-6').click(function () {
    $('.painel-img').css('background-image', 'url("assets/09/painel02.png")')
})
$('#btn-7').click(function () {
    $('.painel-img').css('background-image', 'url("assets/09/painel05.png")')
})
$('.btn-iniciar').click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#booklet").offset().top
    }, 2000);

})