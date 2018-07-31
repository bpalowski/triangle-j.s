import { output } from './triangle';
import { test } from './triangle';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sideOne = $("input#enter-1").val();
    var sideTwo = $("input#enter-2").val();
    var sideThree = $("input#enter-3").val();

    var side1 = parseInt(sideOne);
    var side2 = parseInt(sideTwo);
    var side3 = parseInt(sideThree);

    var newOutput = new output(side1, side2, side3);
    newOutput.checkSide();

    event.preventDefault();
  });
});
test();
