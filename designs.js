// this code is making a function 
$(document).ready(function () {
  
  $('#sizechooser').submit(function makeGrid(grid) { // this  code refers to  " making a function that work is doing the submit button "
    $('table tr').remove();
    var row_input = $('#input_height').val();              // this is about input the value of height to the variable
    var col_input = $('#input_width').val();               // this is about input the value of height to the variable
    for (var i = 1; i <= row_input; i++) {                  // this nested -loop is about making the table . 
      $('table').append("<tr></tr>");                       //The next codes are specific to the frequency of the cell several times according to the input value of the width and height
      for (var j = 1; j <= col_input; j++) {                 
        $('tr:last').append("<td></td>");                 // If you input the values of rows and columns, so the table will be made by this loop and repeating the cells as you input the values
        $('td').attr("class", 'cells')
      }
    }
    grid.preventDefault();                             // the following code is about Adding color and moving it when you press the button

    $('.cells').click(function (event) {
    var paint = $('#colorChooser').val();
      $(event.target).css('background-color', paint);        // this is about the cell's color
    });
  }); 
});
// The end of the code
