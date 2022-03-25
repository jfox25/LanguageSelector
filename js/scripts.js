$(document).ready(function () {
  let surveyQuestion1;
  let surveyQuestion2;
  let surveyQuestion3;
  let surveyQuestion4;
  let surveyQuestion5;
  $(".survey-section")
    .children("button")
    .click(function () {
      const parent = $(this).parent();
      const nextElement = parent.next("div");
      if ($(parent).attr("id") === "q1-survey") {
        surveyQuestion1 = $("#q1-input").val();
      } else if ($(parent).attr("id") === "q2-survey") {
        surveyQuestion2 = $("#q2-input").val();
      } else if ($(parent).attr("id") === "q3-survey") {
        surveyQuestion3 = $("#q3-input").val();
      } else if ($(parent).attr("id") === "q4-survey") {
        surveyQuestion4 = $("#q4-input").val();
      } else if ($(parent).attr("id") === "q5-survey") {
        surveyQuestion5 = $("#q5-input").val();
      }
      $(parent).addClass("hidden");
      $(nextElement).removeClass("hidden");
    });

  $(".survey-finish")
    .children("button")
    .click(function () {
      let swiftCount;
      let csharpCount;
      let rubyCount;
      let result;
      const answerArray = [
        surveyQuestion1,
        surveyQuestion2,
        surveyQuestion3,
        surveyQuestion4,
        surveyQuestion5,
      ];
      console.log(answerArray);
      for (let i = 0; i < answerArray.length; i++) {}
    });
});
