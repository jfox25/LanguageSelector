$(document).ready(function () {
  let darkMode = false;
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
      let linkClass;
      if (darkMode) {
        linkClass = "class = 'link-dark'";
      } else {
        linkClass = "class = 'link-light'";
      }
      const swiftDocElement =
        "<a " +
        linkClass +
        " href='https://www.swift.org/documentation/' target='_blank'>Checkout the Docs</a>";
      const csharpDocElement =
        "<a " +
        linkClass +
        " href='https://docs.microsoft.com/en-us/dotnet/csharp/' target='_blank'>Checkout the Docs</a>";
      const rubyDocElement =
        "<a " +
        linkClass +
        " href='https://guides.rubyonrails.org/' target='_blank'>Checkout the Docs</a>";
      let docElement;
      let swiftCount = 0;
      let csharpCount = 0;
      let rubyCount = 0;
      let result;
      const answerArray = [
        surveyQuestion1,
        surveyQuestion2,
        surveyQuestion3,
        surveyQuestion4,
        surveyQuestion5,
      ];
      for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === "a") {
          swiftCount++;
        } else if (answerArray[i] === "b") {
          csharpCount++;
        } else {
          rubyCount++;
        }
      }
      if (swiftCount > csharpCount && swiftCount >= rubyCount) {
        result = "Swift";
        docElement = swiftDocElement;
      } else if (csharpCount >= swiftCount && csharpCount >= rubyCount) {
        result = "C#";
        docElement = csharpDocElement;
      } else {
        result = "Ruby on Rails";
        docElement = rubyDocElement;
      }
      const resultElement = "<h3>" + result + "</h3>";
      $("#survey-output").append("<p>You should try:</p>");
      $("#survey-output").append(resultElement);
      $("#survey-output").append(docElement);
      const parent = $(this).parent();
      const nextElement = parent.next("div");
      $(parent).addClass("hidden");
      $(nextElement).removeClass("hidden");
    });

  $("#theme-button").click(function () {
    if (darkMode) {
      $("body").removeClass("dark-body");
      $("body").addClass("light-body");
      $(this).removeClass("theme-btn-dark");
      $(this).addClass("theme-btn-light");
      $(this).text("");
      $(this).append("<img src='images/moon.png' alt='icon of a moon' />");
      $("#survey-questions").removeClass("survey-dark");
      $("#survey-questions").addClass("survey-light");
      $(".btn").removeClass("btn-dark");
      $(".btn").addClass("btn-light");
      $(".link-dark").addClass("link-light");
      $(".link-light").removeClass("link-dark");
      darkMode = false;
    } else {
      $("body").removeClass("light-body");
      $("body").addClass("dark-body");
      $(this).removeClass("theme-btn-light");
      $(this).addClass("theme-btn-dark");
      $(this).text("");
      $(this).append("<img src='images/sun.png' alt='icon of a sun' />");
      $("#survey-questions").removeClass("survey-light");
      $("#survey-questions").addClass("survey-dark");
      $(".btn").removeClass("btn-light");
      $(".btn").addClass("btn-dark");
      $(".link-light").addClass("link-dark");
      $(".link-dark").removeClass("link-light");
      darkMode = true;
    }
  });
});
