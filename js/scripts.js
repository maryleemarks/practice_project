$(document).ready(function() {
  $("form#questions").submit(function(event) {
   
    const q1 = $("input#q1").val();
    const q2 = $("input#q2").val();
    const q3 = $("input#q3").val();
    const q4 = $("input#q2").val();
    const q5 = $("input#q5").val();

    if (q1 === q3 && q1 != q4) {
      language = "Ruby"
    } else if (q2 === q5 && q2 != q1) {
      language = "C#"
    } else if (q4 === q2 && q5 != q2 && q5 === q3) {
      language = "JS"
    } else {
      language = "not learning code";
    }
    $("#answer").show();
    $("#language").text(language);

    event.preventDefault();
  });
});