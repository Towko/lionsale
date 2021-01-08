/* Назначаем горизонтальный скролл мышкой */
if (window.innerWidth > 721) {
    $("body").mousewheel(function (event, delta) {
        this.scrollLeft -= delta * 150;
        window.addEventListener("touchstart", { passive: true });
    });
}

/* Плавный скролл к якорю */
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    })
};

$(document).ready(function () {

    /* Параллакс эффекты */
    var scene1 = document.getElementById('pic1');
    var parallaxInstance = new Parallax(scene1);

    var scene2 = document.getElementById('pic2');
    var parallaxInstance = new Parallax(scene2);

    var scene3 = document.getElementById('pic3');
    var parallaxInstance = new Parallax(scene3);

    var scene4 = document.getElementById('pic4');
    var parallaxInstance = new Parallax(scene4);

    var scene5 = document.getElementById('pic5');
    var parallaxInstance = new Parallax(scene5);

    var scene6 = document.getElementById('pic6');
    var parallaxInstance = new Parallax(scene6);

    var scene7 = document.getElementById('parallax');
    var parallaxInstance = new Parallax(scene7);


    /* Slick slider */
    $('.pages').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 2,
        slidesPerRow: 2,
        slidesToScroll: 2,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: true,
        vertical: true,
        verticalSwiping: true
    });


    /* Анимация треугольника */
    setInterval(function () {
        $(".tech__triangle").each(function (anima) {
            if ($(".tech__triangle").hasClass("animateOut")) {
                $(this).addClass('animateIn').removeClass('animateOut');
            } else {
                $(this).removeClass('animateIn').addClass('animateOut');
            }
        });
    }, 3000);

    if (window.innerWidth > 720) {
        /* анимация текстов */
        $("h1").animated("backInUp");
        $(".description").animated("bounceInUp");
        $(".element0").animated("slideInRight");
        $(".element1").animated("rollIn");
        $(".element2").animated("tada");
        $(".element3").animated("flipInY");
        $(".element4").animated("fadeInLeftBig");
        $(".element5").animated("fadeInRightBig");
        $(".element6").animated("fadeInRightBig");
        $(".element7").animated("fadeInRightBig");
        $(".element8").animated("fadeInRightBig");
        $(".element9").animated("fadeInRightBig");
        $(".other-links li").animated("bounceInUp");
    }

    if (window.innerWidth < 721) {
        $("#accordion").accordion({
            header: "h3",
            heightStyle: "content",
            collapsible: true
        });
    }

});
