$('a.nav-link').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: ($(goToSection).offset().top) - 50 + "px"
    })

    $("ul.navbar-nav").removeClass("active")
})