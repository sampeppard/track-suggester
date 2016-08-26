
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    // Business variables
    var interestPhp = 0;
    var interestCss = 0;
    var interestJava = 0;
    var interestRuby = 0;
    var interestCsharp = 0;

    // UI variables
    var name = $("input#name").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var outcome = $(".outcome");

    if (name === "") {
      outcome.text("Please enter your name to recieve your results.");
    }
    else if (question1 === undefined || question2 === undefined || question3 === undefined || question4 === undefined || question5 === undefined) {
      outcome.text("Please answer all questions.");
    }
    else  {

      // question1
      if (question1 === "1") {
        interestJava += 2;
        interestCsharp += 2;
        interestRuby++;
        interestPhp++;
      }
      else if (question1 === "2") {
        interestCss += 5;
      }
      else if (question1 === "3") {
        interestRuby += 2;
        interestPhp++;
      }
      else {
        interestPhp += 2;
      }

      // question2
      if (question2 === "1") {
        interestCss += 5;
      }
      else {
        interestJava += 3;
        interestCsharp += 3;
        interestRuby += 3;
        interestPhp += 3;
      }

      // question3
      if (question3 === "1") {
        interestJava += 2;
        interestCsharp += 2;
        interestRuby++;
        interestPhp++;
      }
      else if (question3 === "2") {
        interestJava++;
        interestCsharp++;
        interestCss++;
        interestRuby++;
        interestPhp++;
      }
      else {
        interestPhp += 2;
        interestCss += 2;
        interestRuby += 2;
      }

      // question4
      if (question4 === "1") {
        interestPhp++;
        interestCss++;
      }
      else {
        interestJava++;
        interestCsharp++;
      }

      // question5
      if (question5 === "1") {
        interestCss++;
      }
      else if (question5 === "2") {
        interestPhp++;
      }
      else if (question5 === "3") {
        interestRuby++;
      }
      else if (question5 === "4") {
        interestJava++;
      }
      else {
        interestCsharp++;
      }

      var result = [interestPhp, interestCss, interestJava, interestRuby, interestCsharp];
      console.log(result);

      var sortInterests = function(a,b) {
        return a - b;
      }

      result.sort(sortInterests);
      console.log(result);
      var suggestion = result[4];

      if (interestPhp === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the PHP/Drupal track.");
      }
      else if (interestCss === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the CSS/Design track.");
      }
      else if (interestJava === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the Java/Android track.");
      }
      else if (interestRuby === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the Ruby/Rails track.");
      }
      else if (interestCsharp === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the C#/.NET track.");
      }
    }

  });
});
