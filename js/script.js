$(document).ready(function() {
  $(".search").on("keyup", function() {
    // target input element and pass event listener "keyup"
    let value = $(this)
      .val()
      .toLowerCase();
    $("a").each(function() {
      // loop through all link elements on the page
      let str = $(this).attr("data-title");
      // target the attribute data-title
      if (str.indexOf(value) > -1) {
        // if the attribute data-title contains a letter in the input(value)
        $(this).show; // show all the possible options
      } else {
        $(this).hide; // hide all the possible options
      }
    });
  });
});
