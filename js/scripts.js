
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    // Business variables
    var interest_php = 0;
    var interest_css = 0;
    var interest_java = 0;
    var interest_ruby = 0;
    var interest_csharp = 0;

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
    } else {

      // question1
      if (question1 === "1") {
        interest_java += 2;
        interest_csharp += 2;
        interest_ruby++;
        interest_php++;
      }
      else if (question1 === "2") {
        interest_css += 5;
      }
      else if (question1 === "3") {
        interest_ruby += 2;
        interest_php++;
      }
      else {
        interest_php += 2;
      }

      // question2
      if (question2 === "1") {
        interest_css += 5;
      }
      else {
        interest_java += 3;
        interest_csharp += 3;
        interest_ruby += 3;
        interest_php += 3;
      }

      // question3
      if (question3 === "1") {
        interest_java += 2;
        interest_csharp += 2;
        interest_ruby++;
        interest_php++;
      }
      else if (question3 === "2") {
        interest_java++;
        interest_csharp++;
        interest_css++;
        interest_ruby++;
        interest_php++;
      }
      else {
        interest_php += 2;
        interest_css += 2;
        interest_ruby += 2;
      }

      // question4
      if (question4 === "1") {
        interest_php++;
        interest_css++;
      }
      else {
        interest_java++;
        interest_csharp++;
      }

      // question5
      if (question5 === "1") {
        interest_css++;
      }
      else if (question5 === "2") {
        interest_php++;
      }
      else if (question5 === "3") {
        interest_ruby++;
      }
      else if (question5 === "4") {
        interest_java++;
      }
      else {
        interest_csharp++;
      }

      var result = [interest_php, interest_css, interest_java, interest_ruby, interest_csharp];
      result.sort();
      console.log(result);
      var suggestion = result[4];

      if (interest_php === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the PHP/Drupal track.");
      }
      else if (interest_css === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the CSS/Design track.");
      }
      else if (interest_java === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the Java/Android track.");
      }
      else if (interest_ruby === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the Ruby/Rails track.");
      }
      else if (interest_csharp === suggestion) {
        outcome.text("Based on your answers " + name + ", you should take the C#/.NET track.");
      }
    }

  });
});
