$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());


    if (!side1 || !side2 || !side3) {
      var answer = "IT'S NOT A TRIANGLE, MAYBE IT'S A SQUARE YOU SQUARE.";
    } else if (side1 === side2 && side2 === side3) {
      var answer = "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      var answer = "Isosceles";
    } else if (side1 != side2 && side2 != side3) {
      var answer = "Scalene";
    } else {
      var answer = "IT'S NOT A TRIANGLE, MAYBE IT'S A SQUARE YOU SQUARE.";
    }
    $("#answer").text("Your triangle is  a/an " + answer);
    event.preventDefault();
  });
});
