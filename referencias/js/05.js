window.addEventListener('load', function(){
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

    $('#abas02 li a').click(function(){
        $('#abas02 li a').removeClass('borda-primaria-03')
        $(this).addClass('borda-primaria-03')
        $('#btCloseMenuMob').click()
        scrollToTop()
    })

    function scrollToTop() {
        window.scrollTo(0, 0);
      }
      
      $(".toTop").click(function() {
        window.scrollTo(0, 0);
      });

      $('#btCloseMenuMob').click()
})