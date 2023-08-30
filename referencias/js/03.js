$(".toTop").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#topo").offset().top
    }, 2000);
});