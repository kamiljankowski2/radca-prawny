$('a.nav-link, a.nav-link-footer').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: ($(goToSection).offset().top) - 50 + "px"
    })

    $("ul.navbar-nav, a.nav-link-footer").removeClass("active")
    $(".toggler").removeClass("mobileOn")
})