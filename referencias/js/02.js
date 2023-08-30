$(document).ready(function() {
    if (window.location.toString().includes('page=1')) {
      $('#link1').addClass('ativo');
    }
    if (window.location.toString().includes('page=2')) {
      $('#link2').addClass('ativo');
    }
    if (window.location.toString().includes('page=3')) {
      $('#link3').addClass('ativo');
    }
    if (window.location.toString().includes('page=4')) {
      $('#link4').addClass('ativo');
    }
    if (window.location.toString().includes('page=5')) {
      $('#link5').addClass('ativo');
    }
    if (window.location.toString().includes('page=6')) {
      $('#link6').addClass('ativo');
    }
    if (window.location.toString().includes('page=7')) {
      $('#link7').addClass('ativo');
    }
    if (window.location.toString().includes('page=8')) {
      $('#link8').addClass('ativo');
    }
    if (window.location.toString().includes('page=9')) {
      $('#link9').addClass('ativo');
    }
    if (window.location.toString().includes('page=10')) {
      $('#link10').addClass('ativo');
      $('#link1').removeClass('ativo');
    }
    if (window.location.toString().includes('page=11')) {
      $('#link11').addClass('ativo');
      $('#link1').removeClass('ativo');
    }
    if (window.location.toString().includes('page=12')) {
      $('#link12').addClass('ativo');
      $('#link1').removeClass('ativo');
    }
  });

	$('.menu-lateral > span').click(function(){
      $('.menu-lateral ul').css('left','0');
      $(this).css('opacity','0');
      $('.menu-lateral > i').css({'opacity':'1','right':'unset','left':'350px'});
  });
  $('.menu-lateral > i').click(function(){
      $('.menu-lateral ul').css('left','-100%');
      $(this).css('opacity','0');
      $('.menu-lateral > span').css({'opacity':'1','right':'unset','right':'-80px'});
  });
/*
  $(".toTop").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#topo").offset().top
    }, 2000);
});
*/
function scrollToTop() {
  window.scrollTo(0, 0);
}

$(".toTop").click(function() {
  window.scrollTo(0, 0);
});