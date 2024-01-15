window.addEventListener("scroll", function() {
    const distance = window.scrollY - 300
    document.querySelector(".oculos1").style.transform = `translateX(${distance * (-0.05)}px)`
    document.querySelector(".oculos2").style.transform = `translateX(${distance * 0.05}px)`
})