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

var yourAge = prompt('What is your age?', '26');
allTheAnswers.push(yourAge);

console.log('You said that you are "' + yourAge + '" years old.');

var whichLoc = prompt("What is your location?", "Tampa");
allTheAnswers.push(whichLoc);

console.log('You said that you are located in "' + whichLoc);

var favCoffee = ask('What is your favorite coffee?', 'latte');
  allTheAnswers.push(favCoffee);

console.log('You said that your favorite coffee is "' + favCoffee);  

allTheAnswers.forEach(function(answer) { console.log(answer); });
