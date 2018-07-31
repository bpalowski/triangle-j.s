import { test } from './../src/triangle.js';
import { output } from './../src/triangle.js';

describe('Triangle', function() {

  it('should test if it is a Triangle', function() {
   var newOutput = new output(1, 1, 7);
    expect(newOutput.checkSide()).toEqual("you have a line dumbass");
  });

  it('should test if a Triangle is Equilateral', function() {
    var newOutput = new output(1, 1, 1);
    expect(newOutput.checkSide()).toEqual("Equilateral");
  });


  it('should test if a Triangle is Isosceles', function() {
    var newOutput = new output(5, 5, 8);
    expect(newOutput.checkSide()).toEqual("Isosceles");
  });

  it('should test if a Triangle is Scalene', function() {
  var newOutput = new output(5, 6, 7);
    expect(newOutput.checkSide()).toEqual("Scalene");
  });


});
