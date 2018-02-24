$(document).ready(function(){
    $('.slider').slick({
        autoplay: true, // автовоспроизведение
        autoplaySpeed: 3000, // скорость воспроизведения
        draggable: true, // перетягивание мышкой
        dots: true, // точки переключатели
        speed: 500, // скорость переключения
        slidesToShow: 1, // количество слайдов на странице
        pauseOnHover: true, // пауза при наведении
        infinite: true
    });
});