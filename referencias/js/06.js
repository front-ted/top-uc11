$(document).ready(function() {
    if (window.location.toString().includes('page=1')) {
      $('#link-1').addClass('ativo');
    }
    if (window.location.toString().includes('page=2')) {
      $('#link-2').addClass('ativo');
    }
    if (window.location.toString().includes('page=3')) {
      $('#link-3').addClass('ativo');
    }
    if (window.location.toString().includes('page=4')) {
      $('#link-4').addClass('ativo');
    }
    if (window.location.toString().includes('page=5')) {
      $('#link-5').addClass('ativo');
    }
    if (window.location.toString().includes('page=6')) {
      $('#link-6').addClass('ativo');
    }
    if (window.location.toString().includes('page=7')) {
      $('#link-7').addClass('ativo');
    }
    if (window.location.toString().includes('page=8')) {
      $('#link-8').addClass('ativo');
    }
    if (window.location.toString().includes('page=9')) {
      $('#link-9').addClass('ativo');
    }
    if (window.location.toString().includes('page=10')) {
      $('#link-10').addClass('ativo');
      $('#link-1').removeClass('ativo');
    }
    if (window.location.toString().includes('page=11')) {
      $('#link-11').addClass('ativo');
      $('#link-1').removeClass('ativo');
    }
    if (window.location.toString().includes('page=12')) {
      $('#link-12').addClass('ativo');
      $('#link-1').removeClass('ativo');
    }
    if (window.location.toString().includes('page=13')) {
      $('#link-13').addClass('ativo');
      $('#link-1').removeClass('ativo');
    }

    document.querySelector('.ativo').scrollIntoView()

    $(".toTop").click(function() {
      window.scrollTo(0, 0);
    });

    $('#btCloseMenuMob').click(function(){
      $('.menu-mob').addClass('closed')
      $(this).addClass('hidden');
      $('#btOpenMenuMob').removeClass('hidden')
  })
  $('#btOpenMenuMob').click(function(){
      $('.menu-mob').removeClass('closed')
      $(this).addClass('hidden');
      $('#btCloseMenuMob').removeClass('hidden')
  })

    //$('#btCloseMenuMob').click()

    if(window.innerWidth < 992){
      $('#btCloseMenuMob').click()
    }

  });
/*
  $('.menu-hamburger').click(function(){
    if($('.menu').css('opacity')=='1'){
      $('.menu').css('opacity', '0')
      $('.menu').css('display', 'none')
    } else {
        $('.menu').css('opacity', '1')
        $('.menu').css('display', 'flex')
    }
    
});*/
$('.resposta').slideUp()
$('.btn-gab').click(function(){
  $(this).next().slideToggle()
})