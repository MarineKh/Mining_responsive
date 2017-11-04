$('.next').click(function() {
    var currentSlide = $('.active-slide'),
        nextSlide = currentSlide.next();

    if(nextSlide.length === 0) {
        nextSlide = $('.slide').first();
    }
    currentSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');
});

$('.prev').click(function() {
    var currentSlide = $('.active-slide'),
        prevSlide = currentSlide.prev();

    if (prevSlide.length === 0) {
        prevSlide = $('.slide').last();
    }
    currentSlide.removeClass('active-slide');
    prevSlide.addClass('active-slide');
});
$('.user div:first').addClass('active-slide');