//* Welcome to my JS adverture! *//

function p (text, css) {
  console.log("%c" + text, "font-size: 14px; font-family: 'Helvetica', Verdana, sans serif;" + css);
}

function info (text) {
  console.log("%c---" + text + "---", "color: blue; font-size: 16px; font-family: 'Helvetica', Verdana, sans serif;");
}

function ask (question, defaultAnswer) {
  return prompt(question, defaultAnswer);
}

/*

  THIS IS WHERE WE START JS ADVENTURE
*/

var allTheAnswers = [];
console.log('How to have a not so fancy pants js adventure');

var continueResponse = prompt('Are you sure you want to continue? This is your last chance. After this there is no turning back.', 'of course!');
allTheAnswers.push(continueResponse);

console.log('You said "' + continueResponse + '". Just wanted to make sure you understand there is no turning back now');

var whichPill = prompt("Do you want to take the (RED) pill or (BLUE) pill?", "RED");
allTheAnswers.push(whichPill);

if (whichPill === "RED") {
    console.log("take the red pill");
    usingMatrix();
} else {
    console.log("take the blue");
    usingMatrix();
}

function usingMatrix() {
  console.log("You take the red pill: you stay in Wonderland and I show you how deep the rabbit hole goes.");
  console.log("You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe.");

  var isMatrixDumb = ask('Do you think the matrix is dumb?', 'Yep');
  allTheAnswers.push(isMatrixDumb);

  switch ( isMatrixDumb ){
      case "Yep":
        p("Yes that is correct, so is Neo.");
        break;
      case "No":
        p("Well you are dumb.");
        break;
      default:
        p("I'm guessing you're half dumb.");
  }
}

function myFunction() {
    var flavor = prompt("What is your favorite ice cream flavor", "chocolate");
    if (flavor != null) {
        document.getElementById("demo").innerHTML =
        "Hello a little birdy told me that you like " + flavor + " as your favorite ice cream flavor!";
    }
}

function yourFunction() {
    var x;
    if (confirm("Do you like pancakes?") == true) {
        x = "You said yes!";
    } else {
        x = "Are you a robot...who doesn't like pancakes?";
    }
    document.getElementById("newDemo").innerHTML = x;
}

allTheAnswers.forEach(function(answer) { console.log(answer); });
