$(window).on("load", function() {

    $(".loader").fadeOut(1000, function() {
        $(".loader").fadeOut(1250);
    });

    $(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

});

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
    });

    var typed = new Typed(".sub", {
        strings: ["Software Developer", "Web Developer", "Project Manager"],
        typeSpeed: 175,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    
    $(window).scroll(function() {

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                scaleColor: false,
                trackColor: false,
                barColor: '#fff',
                size: 152,
                lineWidth: 4,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
        
            });
        }
    });

    $(".counter").countup(200);

    $("[data-fancybox]").fancybox();

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

    const nav = $("#navigation");
    const navTop = nav.offset().top;
    console.log(navTop);
    console.log($(window).scrollTop())

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        };
    };

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
    });

});
