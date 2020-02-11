

(function ($) {
    "use strict"

    jQuery(document).ready(function () {

        //preloader js
        // var prealoaderOption = $(window);
        // prealoaderOption.on("load", function () {
        //     var preloader = jQuery('.preloader');
        //     var preloaderArea = jQuery('.preloader-area');
        //     preloader.fadeOut();
        //     preloaderArea.delay(350).fadeOut('slow');
        // });

        //wow js
            new WOW().init();

        // Custom & scroll to top
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 150) {
                $('header').removeClass('nav-slider fadeInUp')
                $('header').addClass('fixed-top custom-nav-bg animated fadeInDown delay-5s')
                // $('nav').css('top', '0px');
            } else {
                $('header').addClass('nav-slider custom-nav-bg fadeInUp')
                $('header').removeClass('fixed-top custom-nav-bg fadeInDown')
            }

            if (scrollTop > 20) {
                $("#myBtn").fadeIn(function () {
                    $(this).css('display', "block");
                });
            } else {
                $("#myBtn").fadeOut(function () {
                    $(this).css('display', "none");
                });

            }
        });

        // smoothscroll js
        $("#myBtn").click(function () {
            //1 second of animation time
            //html works for FFX but not Chrome
            //body works for Chrome but not FFX
            //This strange selector seems to work universally
            $("html, body").animate({scrollTop: 0}, 1000);
        });

        //Ripples js
        if ($('.water-effect').length > 0) {
            $('.water-effect').ripples({
                resolution: 512,
                dropRadius: 20, //px
                perturbance: 0.04,
            });

            // Automatic drops
            setInterval(function () {
                var $el = $('.water-effect');
                var x = Math.random() * $el.outerWidth();
                var y = Math.random() * $el.outerHeight();
                var dropRadius = 20;
                var strength = 0.04 + Math.random() * 0.04;

                $el.ripples('drop', x, y, dropRadius, strength);
            }, 400);
        }

        //Progressbar js
        var progress = setInterval(function () {
            var $bar = $('.progress-bar');
            $bar.width($bar.width() + 500);
        });

        //owlCarousel js
        if ($('.owl-carousel').length > 0) {
            $('#testimonials .owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 15,
                mouseDrag: false,
                autoplay: true,
                smartSpeed: 500
            });

        }

        //lightbox js
        $(document).on('click', '[data-toggle="lightbox"]', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });

        //portfolio js
        if ($('.grid').length > 0) {
            var $grid = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows',
                getSortData: {
                    name: '.name',
                    symbol: '.symbol',
                    number: '.number parseInt',
                    category: '[data-category]',
                    weight: function (itemElem) {
                        var weight = $(itemElem).find('.weight').text();
                        return parseFloat(weight.replace(/[\(\)]/g, ''));
                    }
                }
            });

            //FILTER FUNCTIONS
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function () {
                    var number = $(this).find('.number').text();
                    return parseInt(number, 10) > 50;
                },
                // show if name ends with -ium
                ium: function () {
                    var name = $(this).find('.name').text();
                    return name.match(/ium$/);
                }
            };

            // bind filter button click
            $('#filters').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[filterValue] || filterValue;
                $grid.isotope({filter: filterValue});
            });

            // bind sort button click
            $('#sorts').on('click', 'button', function () {
                var sortByValue = $(this).attr('data-sort-by');
                $grid.isotope({sortBy: sortByValue});
            });

            // change is-checked class on buttons
            $('.button-group').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
        }

        //toggle btn js
        $('.header-toggle').on('click', function() {
            $('header .header-items').toggleClass('on');
        });

        //Color Options js
        $('.color-options .toggle-btn').on('click', function() {
            $('.color-options').toggleClass('active');
        });
        $('.red').on("click", function () {
            $('#theme-color').attr("href", "css/red.css");
            $("#changelogo").attr('src',"img/default_logo.png");
        });
        $('.blue').on("click", function () {
            $('#theme-color').attr("href", "css/blue.css");
            $("#changelogo").attr('src',"img/blue.png");
        });
        $('.green').on("click", function () {
            $('#theme-color').attr("href", "css/green.css");
            $("#changelogo").attr('src',"img/green.png");
        });
        $('.pink').on("click", function () {
            $('#theme-color').attr("href", "css/pink.css");
            $("#changelogo").attr('src',"img/pink.png");
        });
        $('.yellow').on("click", function () {
            $('#theme-color').attr("href", "css/yellow.css");
            $("#changelogo").attr('src',"img/yellow.png");
        });
        $('.orange').on("click", function () {
            $('#theme-color').attr("href", "css/orange.css");
            $("#changelogo").attr('src',"img/orange.png");
        });

    });
})(jQuery);