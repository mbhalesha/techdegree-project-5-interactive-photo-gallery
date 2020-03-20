// search function using jQuery

// target input element and pass event listener "keyup"
$(".search").on("keyup", function() {
  var value = $(this)
    .val()
    .toLowerCase();
  // loop through all link elements on the page
  $(".gallery a").filter(function() {
    $(this).toggle(
      $(this)
        // target the attribute data-title
        .attr("data-title")
        // change to all Lower Case so case insensitive search
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
});

lightbox.option({
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true
});
