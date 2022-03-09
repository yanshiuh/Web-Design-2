$(document).ready(function () {
  $(".menu-nav").click(function () {
    $(".sidebar").addClass("active");
    $(".menu-nav").addClass("close");
  });

  $(".menu").click(function () {
    $(".sidebar").removeClass("active");
    $(".menu-nav").removeClass("close");
  });
});
