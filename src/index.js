jQuery(document).ready(function($) {
  const $burger = $(".header__burger"),
    $nav = $(".navigation"),
    $body = $("body"),
    $headerLink = $(".navigation__link"),
    $arrow = $(".arrowUp");

  $burger.on("click", function(event) {
    $burger.toggleClass("active");
    $nav.toggleClass("active");
    $body.toggleClass("fixed-page");
  });

  $(".partners__slider").slick({
    arrows: false,
    infinite: true,
    dots: false,
    cssEase: "linear",
    slidesToShow: 8,
    autoplay: true,
    slidesToScroll: 4,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
    ],
  });

  $(window).on(
    "scroll",
    $.debounce(0, function() {
      if ($(this).scrollTop() > 600) {
        $(".header__top_social-link a").css("color", "blue");
        $arrow.addClass("active");
      } else {
        $(".header__top_social-link a").css("color", "#fff");
        $arrow.removeClass("active");
      }
    })
  );

  $headerLink.on("click", function(e) {
    e.preventDefault();
    const target = $(this).attr("href");
    console.log(this);
    $("html, body").animate({ scrollTop: $(target).offset().top - 100 }, 800);
    $nav.removeClass("active");
    $burger.removeClass("active");
    $body.removeClass("fixed-page");
  });

  $arrow.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
