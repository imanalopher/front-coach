
$(() => {
  console.log("$");
  $(".rate-level-input").change(e => {
    let rateLevel = e.target;
    $(".rate-level-input").not($(rateLevel)).prop("checked", false);

    let length = $(rateLevel).val();

    for (let i = 1; i < length; i++) {
      $("#rate-level-" + i).prop("checked", true);
    }
  });
});
console.log("before");
