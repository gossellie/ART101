$(".nice-block span").click(function () {
  $(this).parent().toggleClass("more");

  if ($(this).html() == "more") {
    $(this).html("less");
  } else {
    $(this).html("more");
  }
});

// hover animation
$(".nice-block").hover(
  function () {
   
    $(this).animate({
      width: "300px",
      opacity: 1
    }, 400);
  },
  function () {

    $(this).animate({
      width: "200px",
      opacity: 1
    }, 400);
  }
);