$(function () {
  $("figure").on("click", function () {
    var $thisDetail = $(".detail").eq($("figure").index($(this)));
    if ($thisDetail.hasClass("active")) {
      //   $thisDetail.fadeOut("slow");
      $thisDetail.removeClass("active");
    } else {
      //   $thisDetail.fadeIn("slow");
      $(".detail").removeClass("active");
      $("figure").removeClass("figureOn");
      $(this).addClass("figureOn");
      $thisDetail.addClass("active");
    }
  });
});
