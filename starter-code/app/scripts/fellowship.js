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
    var middleearth = document.createElement('section');
    middleearth.id="middleearth";
    //console.log(middleearth);
for (var i = 0; i < lands.length; i++){
    var article = document.createElement('article');
    article.id = (lands[i]);
    var addheader = document.createElement("h1");
    addheader.textContent = (lands[i]);
    //console.log(addheader.textContent);
    article.appendChild(addheader);
    middleearth.appendChild(article);
    // console.log(addheader);
    //console.log(middleearth);
   }
  document.body.appendChild(middleearth);
  //console.log(body);
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();
//debugger;

// Part 2

function makeHobbits() {
    var shire = document.getElementById('The Shire');
    var hobbitol = document.createElement("ul");
    hobbitol.id = "hobbitlist";
    //console.log(hobbitlist);
    for (var j = 0; j < hobbits.length; j++){
    var hobbitli = document.createElement("li");
    hobbitli.id = (hobbits[j]);
    //console.log(hobbitol);
    hobbitli.textContent = (hobbits[j]);
    //class hobbit
    hobbitli.className = "hobbit";
    //console.log(hobbitli);
    hobbitol.appendChild(hobbitli);
  }
  shire.appendChild(hobbitol);
  //articlehobbit.id = "hobbit";
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  //console.log(hobbitol);
}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
    var getringdiv = document.createElement('div');
    getringdiv.id="the-ring";
    getringdiv.className = "magic-imbued-jewelry";
    var frodo = document.getElementById('Frodo Baggins');
    //console.log(frodo);
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
    getringdiv.addEventListener("clicks",nazgulScreech);
    //not working;
    frodo.appendChild(getringdiv);
    //call the function at index.html to play music
   //console.log(getringdiv);
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}
keepItSecretKeepItSafe();
// Part 4 done


function makeBuddies() {
    //var rivendell = document.getElementById("Rivendell");
    //console.log(rivendell);
    //var aside =  document.createElement("aside");
    //var buddieslist = document.createElement("ul");
    //console.log(buddieslist);
    //buddieslist.id = "mybuddy";
//for loop
//for (var k = 0; k < buddies.length; k = 1++){
    // var buddiesli = document.createElement("li");
    // buddiesli.id = (buddies[k]);
    // buddiesli.textContent = (buddis[k]);
    // console.log(buddies[k]);
}
//buddieslist.appendChild(buddiesli);
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell


makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
