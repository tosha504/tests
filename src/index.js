jQuery(document).ready(function($) {
  const $burger = $(".header__burger"),
    $nav = $(".navigation"),
    $body = $("body");

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
    slidesToShow: 3,
  });
});
