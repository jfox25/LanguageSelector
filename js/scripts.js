$(document).ready(function () {
  $(".survey-section")
    .children("button")
    .click(function () {
      const parent = $(this).parent();
      const nextElement = parent.next("div");

      $(parent).addClass("hidden");
      $(nextElement).removeClass("hidden");
    });
});
