$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sideOne = $("input#enter-1").val();
    var sideTwo = $("input#enter-2").val();
    var sideThree = $("input#enter-3").val();

    var side1 = parseInt(sideOne);
    var side2 = parseInt(sideTwo);
    var side3 = parseInt(sideThree);


  if (side1 >= (side2 + side3) || side2 >= (side1 + side3) || side3 >=(side1 + side2)) {
     $(".triangle").text("you have a line dumbass");
  } else if (side1 === side2 && side1 === side3 && side2 === side3) {
     $(".triangle").text("Equilateral");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
     $(".triangle").text("Isosceles");
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3 ) {
     $(".triangle").text("Scalene");
  }

  //else  {
    // $(".triangle").text("not a triangle. Please enter the length for all 3 sides");
  //}


  //  $(".enter-Name").text(enter);




    event.preventDefault();
  });
});
