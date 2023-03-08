$(".top__up").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1500,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$(function () {

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });
   
   
})




