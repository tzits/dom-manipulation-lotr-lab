console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
var middleEarth = document.createElement('section');
middleEarth.setAttribute("id", "middleEarch");

var shire = document.createElement('article');
var shireText = document.createElement("H1");
shireText.createTextNode = "The Shire";
shire.appendChild(shireText);

var rivendell = document.createElement('article');
var rivendellText =document.createElement("H1");
rivendellText.createTextNode = "Rivendell";
rivendell.appendChild(rivendellText);

var mordor = document.createElement('article');
var mordorText =  document.createElement("H1");
mordorText.createTextNode = "Mordor"
mordor.appendChild(mordorText);

middleEarth.appendChild(shire);
middleEarth.appendChild(rivendell);
middleEarth.appendChild(mordor);

body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  var ul = document.createElement('ul');
  for (i=0; i<hobbits.length; ++) {
    var li = document.createElement('li');
    li.className('hobbit')
    var nli = li.createTextNode(hobbits[i]);
  ul.appendChild(nli);
  }
  theShire.appendChild(ul);
}


// Part 3

  var frodo = body.querySelectorAll('li')[0]
function keepItSecretKeepItSafe() {
  var ring = document.createElement('div');
  ring.setAttribute('id', 'the-ring');
  ring.setClass('magic-imbued-jewelry')
  ring.createEventListener('click', nazgulScreech);
  frodo.appendChild(ring)
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');
  var fellows = document.createElement('ul');
  for (i = 0; i < buddies.length; i ++) {
    var li = document.createElement('li');
    li.textContent = buddies[i];
    fellows.appendChild(li)
  }
aside.appendChild(fellows);
Rivendell.appendChild(aside);
}


// Part 5

var ranger = Rivendell.aside.fellows[3]
function beautifulStranger() {
 ranger.textContent = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6
var hobs = theShire.querySelectorAll('ul');
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  
  rivendell.appendChild(hobs);
  shire.removeChild(hobs);
}


// Part 7

var the-fellowship = rivendell.createElement('div');
function forgeTheFellowShip() {
  for (i = 0; i < hobs.length; i ++){
    the-fellowship.appendChild(hobs[i]);
    alert(hobs[i] " has joined the Fellowship")
  }
  for (i = 0; i < fellows.length; i ++){
    the-fellowship.appendChild(fellows[i]);
    alert(fellows[i] " has joined the Fellowship")
  }


  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8

var gandalf = the-fellowship[4]
function theBalrog() {
  gandalf.textContent = 'Gandalf the White';
  gandalf.style.backgroudColor = "white";
  gandalf.style.border = "3px solid grey";
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

}


// Part 9
var boromir = the-fellowship[8]
function hornOfGondor() {
  alert('the horn of gondor has blown');
  boromir.style.textDecoration = "line-through";
  /*the-fellowship.pop if last in array */
  the-fellowship.removeChild(boromir)  
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10
var sam = the-fellowship[1];
var frodo = the-fellowship[0];
var doom = mordor.createElement.('div');
doom.setAttribute('id', 'mount-doom')
function itsDangerousToGoAlone(){
mordor.appendChild(sam);
mordor.appendChild(frodo);

  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

}


// Part 11
var ring = frodo.querySelector('#the-ring');
var gollum = document.createElement('div');
gollum.setAttribute('id', 'gollum')
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
gollum.appendChild(ring);
doom.appendChild(gollum);

}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  doom.removeChild(gollum);
  theShire.appendChild(sam);
  theShire.appendChild(frodo);
  var pippin = hobs[2]
  var merry = hobs[3]
  theShire.appendChild(pippin);
  theShire.appendChild(merry);

}
