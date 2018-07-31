import $ from 'jquery';

export function output(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.checkSide = function() {

  if (this.side1 >= (this.side2 + this.side3) || this.side2 >= (this.side1 + this.side3) || this.side3 >=(this.side1 + this.side2)) {
     $(".triangle").text("you have a line dumbass");
     return "you have a line dumbass";
  } else if (this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3) {
     $(".triangle").text("Equilateral");
     return "Equilateral";
  } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
     $(".triangle").text("Isosceles");
     return "Isosceles";
  } else if (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3 ) {
     $(".triangle").text("Scalene");
     return "Scalene";
  }
}

}
