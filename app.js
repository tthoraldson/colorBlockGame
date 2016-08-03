$(document).ready(function(){
  $('#randomize').click(function(){
    randomizeDIVColors();

    var findThisBox = colorToFind(); // stores the correct box
    var findThisColor = eval(findThisBox) // stores the correct box's color

    $('#userFeedback').empty();
    $('#correctColorDisplay').empty();                // clears the correct color display
    $('#correctColorDisplay').append("Find This Color: ", findThisColor);  // adds the correct color to find

    $('.rectangle').click(function(){   // reports if clicked DIV is correct
      var $clicked = $(this).attr('id');
      if ($clicked === findThisBox){    // if the user picks the correct color
        console.log("You are correct!!");
        $('#userFeedback').empty();
        $('#userFeedback').append("You are Correct!");
      }
      else {                            // if the user picks the wrong color
        var wrongResponses = ["nope!", "try again!", "incorrect!", "are you color blind??", "W R O N G", "not even close bruh"];
        var randomWrongResponse = shuffle(wrongResponses);

        $('#userFeedback').empty();
        $('#userFeedback').append(randomWrongResponse[0]);
      }
    });

  });
});

// global variables
var box11; var box12; var box13; var box14; var box15;
var box21; var box22; var box23; var box24; var box25;
var box31; var box32; var box33; var box34; var box35;
var box41; var box42; var box43; var box44; var box45;
var box51; var box52; var box53; var box54; var box55;
var colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",];
var boxes = ["box11", "box12", "box13", "box14", "box15", "box21", "box22", "box23", "box24", "box25", "box31", "box32", "box33", "box34", "box35", "box41", "box42", "box43", "box44", "box45", "box51", "box52", "box53", "box54", "box55"];

// function shuffles array order
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// randomizes colors on the DOM
function randomizeDIVColors() {
  var shuffeledColors = shuffle(colors);
  $('#box11').css('background-color', box11 = shuffeledColors[0]);
  $('#box12').css('background-color', box12 = shuffeledColors[1]);
  $('#box13').css('background-color', box13 = shuffeledColors[2]);
  $('#box14').css('background-color', box14 = shuffeledColors[3]);
  $('#box15').css('background-color', box15 = shuffeledColors[4]);

  $('#box21').css('background-color', box21 = shuffeledColors[5]);
  $('#box22').css('background-color', box22 = shuffeledColors[6]);
  $('#box23').css('background-color', box23 = shuffeledColors[7]);
  $('#box24').css('background-color', box24 = shuffeledColors[8]);
  $('#box25').css('background-color', box25 = shuffeledColors[9]);

  $('#box31').css('background-color', box31 = shuffeledColors[10]);
  $('#box32').css('background-color', box32 = shuffeledColors[11]);
  $('#box33').css('background-color', box33 = shuffeledColors[12]);
  $('#box34').css('background-color', box34 = shuffeledColors[13]);
  $('#box35').css('background-color', box35 = shuffeledColors[14]);

  $('#box41').css('background-color', box41 = shuffeledColors[15]);
  $('#box42').css('background-color', box42 = shuffeledColors[16]);
  $('#box43').css('background-color', box43 = shuffeledColors[17]);
  $('#box44').css('background-color', box44 = shuffeledColors[18]);
  $('#box45').css('background-color', box45 = shuffeledColors[19]);

  $('#box51').css('background-color', box51 = shuffeledColors[20]);
  $('#box52').css('background-color', box52 = shuffeledColors[21]);
  $('#box53').css('background-color', box53 = shuffeledColors[22]);
  $('#box54').css('background-color', box54 = shuffeledColors[23]);
  $('#box55').css('background-color', box55 = shuffeledColors[24]);
}

// picks a color to find from the colors displayed on the dom
function colorToFind() {
  var tempArray = shuffle(boxes);
  var correctColor = tempArray[0];
  return correctColor;
}
