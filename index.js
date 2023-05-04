// アコーディオンスタイル
// $(function () {
//   $(".what").on("click", function () {
//     var $thisDetail = $(".detail").eq($(".what").index($(this)));
//     if ($thisDetail.hasClass("active")) {
//       //   $thisDetail.fadeOut("slow");
//       $thisDetail.removeClass("active");
//     } else {
//       //   $thisDetail.fadeIn("slow");
//       $(".detail").removeClass("active");
//       $(".what").removeClass("figureOn");
//       $(this).addClass("figureOn");
//       $thisDetail.addClass("active");
//     }
//   });
// });

$(function () {
  // スクロールを開始したら
  $(window).on("scroll", function () {
    // ファーストビューの高さを取得
    $(".what").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight - 100) {
        $(this).addClass("figureOn");
      }
      if (scroll > position - windowHeight + windowHeight / 4) {
        $(this).removeClass("figureOn");
      }
      // if (scroll > position + windowHeight / 4) {
      //   $(this).addClass("figureOn");
      // }
    });
  });
});
