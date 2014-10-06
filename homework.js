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

if(continueResponse === 'of course!') {
  console.log("you said of course!");
  yesDoIt();
} else {
  console.log('You dont continue');
  noGo();
}

console.log('You said "' + continueResponse + '". Just wanted to make sure you understand there is no turning back now');

function yesDoIt() {
  var whichPill = ask("Do you want to take the (RED) pill or (BLUE) pill?", "RED");
  allTheAnswers.push(whichPill);

  switch ( whichPill ){
      case "RED":
        console.log("You take the red pill.");
        redPill();
        break;
      case "BLUE":
        console.log("You take the blue pill.");
        bluePill();
        break;
      default:
        alert("I'm guessing you're not sure?");
  }

  console.log('You said you want to take the ' + whichPill + ' pill.');
}


function redPill() {
  var rabbitHole = ask('You take the red pill: you stay in Wonderland and I show you how deep the rabbit hole goes. Do you want to see how deep this rabbit hole goes?', 'Yep');
  allTheAnswers.push(rabbitHole);

  switch ( rabbitHole ){
      case "Yep":
        alert("You will now enter the Matrix.");
        break;
      case "No":
        alert("Well you are a scardy cat!");
        break;
      default:
        alert("I'm guessing you're not sure?");
  }
}

function bluePill() {
  var storyEnds = ask('You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. Do you really want this?', 'Yep');
  allTheAnswers.push(storyEnds);

  switch ( storyEnds ){
      case "Yep":
        alert("The story ends, you have a boring rest of your life, get fat and lose your hair and then die.");
        break;
      case "No":
        alert("You go back and take the red pill, and enter the Matrix.");
        break;
      default:
        alert("I'm guessing you're just in limbo world now...");
  }
}

function noPill() {
  console.log("No pill for you chump. Indecisiveness is not rewarded!");
}

function noGo() {
  console.log("Sorry game over!");
}

allTheAnswers.forEach(function(answer) { console.log(answer); });


function myFunction() {
    var isMatrixDumb = prompt("Do you think the Matrix is dumb? It's okay you can be honest, really.", "Yep");
    if (isMatrixDumb != null) {
        document.getElementById("demo").innerHTML =
        "you said " + isMatrixDumb + "! Thanks for taking the Matrix survey!";
    }
}
