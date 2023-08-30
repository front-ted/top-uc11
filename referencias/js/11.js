$('.tela').hide()
$('.tela-1').fadeIn()
$('.avancar-1').click(function(){
    $('.tela-1').fadeOut()
    window.setTimeout(function(){
        $('.tela-2').fadeIn()
    }, 500)
    
})
$('.avancar-2').click(function(){
    $('.tela-2').fadeOut()
    window.setTimeout(function(){
        $('.tela-3').fadeIn()
    }, 500)
    
})
$('.avancar-3').click(function(){
    $('.tela-3').fadeOut()
    window.setTimeout(function(){
        $('.tela-4').fadeIn()
    }, 500)
    
})
$('.avancar-4').click(function(){
    $('.tela-4').fadeOut()
    window.setTimeout(function(){
        $('.tela-5').fadeIn()
        if($(window).width() > 1100){
            $('.livro').css('background-image', 'url(assets/11/container-final.png)')
        }
        
    }, 500)
    
})
$('.retornar-1').click(function(){
    $('.tela-2').fadeOut()
    window.setTimeout(function(){
        $('.tela-1').fadeIn()
    }, 500)
})
$('.retornar-2').click(function(){
    $('.tela-3').fadeOut()
    window.setTimeout(function(){
        $('.tela-2').fadeIn()
    }, 500)
})
$('.retornar-3').click(function(){
    $('.tela-4').fadeOut()
    window.setTimeout(function(){
        $('.tela-3').fadeIn()
    }, 500)
})
$('.retornar-4').click(function(){
    $('.tela-5').fadeOut()
    window.setTimeout(function(){
        $('.tela-4').fadeIn()
        if($(window).width() > 1100){
            $('.livro').css('background-image', 'url(assets/11/container.png)')
        }
        
    }, 500)
})