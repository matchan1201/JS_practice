// $(document).ready(function () {
//   // jQueryプログラムの内容
//   $("body").html("<h1>Hello JQuery!!</h1>");
// });
// $(function () {
//   $(".box1").css({
//     "background-color": "#0000FF",
//     height: "100px",
//   });
// });
// $(function () {
//   $(".box1").slideDown(3000, function () {
//     //第一引数に数字を入れると速度を変えられる
//     $(".box1")
//       .css({
//         "background-color": "#0000FF",
//         height: "100px",
//       })
//       .slideUp(3000);
//   });
// });
// $(function () {
//   $(".box1").show(3000); //1000で1秒掛けて表示
//   $(".box1").css({ "background-color": "#0000FF" });
// });
// $(function () {
//   $(".box1").on("click", function () {
//     //clickした時だけ
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").removeClass("box1-ext");
//   });
// });
// $(function () {
//   $(".box1").on("click", function () {
//     $(this).slideUp();
//   });
// });
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
