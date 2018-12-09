
$(() => {
  $(".rate-level-label").hover(function () {

    let attrFor = $(this).attr("for");
    let number = attrFor[attrFor.length - 1];

    $('.rate-level-label').each(function (r) {

      let innerFor = $(this).attr("for");
      let innerNumber = innerFor[innerFor.length - 1];

      if (number >= innerNumber) {
        $(this).addClass("show-star");
      } else {
        $(this).removeClass("show-star");
      }

    });
  });
});
