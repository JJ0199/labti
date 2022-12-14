(function(a) {
    a(document).ready(function() {
        a(".custom-select").niceSelect();
        a("td:empty").addClass("no-bg")
    });
    a(window).scroll(function() {
        var f = a(".header .navigation-wrapper"),
            e = a(window).scrollTop();
        if (e >= 100) {
            f.addClass("sticky")
        } else {
            f.removeClass("sticky")
        }
    });
    a(document).ready(function() {
        a(".hamburger-menu").click(function() {
            a(".menu-btn").toggleClass("active");
            a(".main-menu").toggleClass("active");
            a("body").toggleClass("menu-open");
            a("html").toggleClass("overflow")
        })
    });
    a(document).ready(function() {
        a(".main-menu li.menu-item-has-children>a, .main-menu li.menu-item-has-megamenu>a").on("click", function() {
            a(this).removeAttr("href");
            var e = a(this).parent("li");
            if (e.hasClass("open")) {
                e.removeClass("open");
                e.find("li").removeClass("open");
                e.find("ul.submenu, .megamenu").slideUp()
            } else {
                e.addClass("open");
                e.children("ul.submenu, .megamenu").slideDown();
                e.siblings("li").children("ul.submenu, .megamenu").slideUp();
                e.siblings("li").removeClass("open");
                e.siblings("li").find("li").removeClass("open");
                e.siblings("li").find("ul.submenu, .megamenu").slideUp()
            }
        });
        a(".menu-item-has-children>a").append('<span class="arrow"></span>');
        a(".menu-item-has-megamenu>a").append('<span class="arrow"></span>')
    });
    a(".main-banner").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        cssEase: "linear",
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }]
    });
    a(document).ready(function() {
        a(".datepickr").datepicker({
            timepicker: false,
            minDate: new Date()
        });
        a(".dob").datepicker({
            timepicker: false,
        });
        a(".timepickr").datepicker({
            timepicker: true,
            onlyTimepicker: true,
            range: true,
        })
    });
    a(".car-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        cssEase: "linear",
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }]
    });
    a(".team-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        cssEase: "linear",
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }]
    });
    a(".blog-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        cssEase: "linear",
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }]
    });
    a(".partners-slider").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        cssEase: "linear",
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 5
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 4
            }
        }, {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 400,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        }]
    });
    a(".resend-banner").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        cssEase: "linear",
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1;
            }
        }]
    });
    a(".js-range-slider1").ionRangeSlider({
        type: "double",
        skin: "round",
        hide_min_max: true,
        min: 0,
        max: 1000,
        from: 100,
        to: 800,
        grid: false,
        prefix: "$"
    });
    a(".range-slider-time").ionRangeSlider({
        type: "double",
        skin: "round",
        hide_min_max: true,
        values: ["00:00", "00:15", "00:30", "00:45", "01:00", "01:15", "01:30", "01:45", "02:00", "02:15", "02:30", "02:45", "03:00", "03:15", "03:30", "03:45", "04:00", "04:15", "04:30", "04:45", "05:00", "05:15", "05:30", "05:45", "06:00", "06:15", "06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", "22:00", "22:15", "22:30", "22:45", "23:00", "23:15", "23:30", "23:45", ],
        from_min: 8,
        to: 40,
        drag_interval: true,
        min_interval: 8,
    });
    a(".range-slider-cruise").ionRangeSlider({
        type: "single",
        skin: "round",
        hide_min_max: true,
        values: ["0", "1 Nights", "2 Nights", "3 Nights", "4 Nights", "5 Nights", "6 Nights", "7 Nights", "8 Nights", "9 Nights", "10 Nights", "11 Nights", "12 Nights", ],
        from_min: 5,
        drag_interval: true,
        min_interval: 5,
    });
    a(".count").each(function() {
        a(this).prop("Counter", 0).animate({
            Counter: a(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function(e) {
                a(this).text(Math.ceil(e))
            }
        })
    });
    a(".detail-slider-for").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        cssEase: "linear",
        asNavFor: ".detail-slider-nav"
    });
    a(".detail-slider-nav").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        asNavFor: ".detail-slider-for",
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    a(".magnific-gallery").magnificPopup({
        delegate: "a.popup",
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
            enabled: true
        }
    });
    a(".detail-testimonial").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        arrows: false,
        dots: false,
        cssEase: "linear",
    });
    var d = 220;
    var b = 500;
    a(window).on("scroll", function() {
        if (a(this).scrollTop() > d) {
            a(".back-top").fadeIn(b)
        } else {
            a(".back-top").fadeOut(b)
        }
    });
    a(".back-top").on("click", function(e) {
        e.preventDefault();
        a("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false
    });
    if (a(window).scrollTop() > d) {
        a(".back-top").fadeOut(0)
    }
    a('a[href="#"]').click(function(f) {
        f.preventDefault ? f.preventDefault() : f.returnValue = false
    });

    function c() {
        var f = new Date("01 January 2021 00:00:00 GMT+05:30");
        f = (Date.parse(f) / 1000);
        var i = new Date();
        i = (Date.parse(i) / 1000);
        var k = f - i;
        var e = Math.floor(k / 86400);
        var g = Math.floor((k - (e * 86400)) / 3600);
        var h = Math.floor((k - (e * 86400) - (g * 3600)) / 60);
        var j = Math.floor((k - (e * 86400) - (g * 3600) - (h * 60)));
        if (g < "10") {
            g = "0" + g
        }
        if (h < "10") {
            h = "0" + h
        }
        if (j < "10") {
            j = "0" + j
        }
        a("#cvdays").html(e);
        a("#cvhours").html(g);
        a("#cvminutes").html(h);
        a("#cvseconds").html(j)
    }
    setInterval(function() {
        c()
    }, 1000);
    a(document).ready(function() {
        a(".gallery-grid").isotope(function() {
            itemSelector: ".filter-box"
        });
        a(".filter-gallery>ul>li>a").click(function() {
            a(".filter-gallery>ul>li>a").removeClass("active");
            a(this).addClass("active");
            var e = a(this).attr("data-filter");
            a(".gallery-grid").isotope({
                filter: e
            });
            return false
        })
    });
    a(".gallery-grid").magnificPopup({
        delegate: "a.popup",
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
            enabled: true
        }
    })
})(jQuery);