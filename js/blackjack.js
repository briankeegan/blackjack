// insurance?
// doubleDown vegas vs europe?
// splits
// 'use strict';
var dealersPoints = 0, dealerShows = 0 , playersPoints = 0, won = 0, lost = 0,
pushed = 0, played = 0, busts = 0, blackjacks = 0, newD = null;

function shuffleCards() {
  var newDeck = [];
  var numDecks = $("#numberDecks").value;
  var deck = ["<img class='card' src='pics/blackjack/2_of_clubs.png' alt='2 of clubs'>", "<img class='card' src='pics/blackjack/3_of_clubs.png' alt='3 of clubs'>", "<img class='card' src='pics/blackjack/4_of_clubs.png' alt='4 of clubs'>", "<img class='card' src='pics/blackjack/5_of_clubs.png' alt='5 of clubs'>", "<img class='card' src='pics/blackjack/6_of_clubs.png' alt='6 of clubs'>", "<img class='card' src='pics/blackjack/7_of_clubs.png' alt='7 of clubs'>", "<img class='card' src='pics/blackjack/8_of_clubs.png' alt='8 of clubs'>", "<img class='card' src='pics/blackjack/9_of_clubs.png' alt='9 of clubs'>", "<img class='card' src='pics/blackjack/10_of_clubs.png' alt='10 of clubs'>", "<img class='card' src='pics/blackjack/jack_of_clubs.png' alt='jack of clubs'>", "<img class='card' src='pics/blackjack/queen_of_clubs.png' alt='queen of clubs'>", "<img class='card' src='pics/blackjack/king_of_clubs.png' alt='king of clubs'>", "<img class='card' src='pics/blackjack/ace_of_clubs.png' alt='ace of clubs'>", "<img class='card' src='pics/blackjack/2_of_diamonds.png' alt='2 of diamonds'>", "<img class='card' src='pics/blackjack/3_of_diamonds.png' alt='3 of diamonds'>", "<img class='card' src='pics/blackjack/4_of_diamonds.png' alt='4 of diamonds'>", "<img class='card' src='pics/blackjack/5_of_diamonds.png' alt='5 of diamonds'>", "<img class='card' src='pics/blackjack/6_of_diamonds.png' alt='6 of diamonds'>", "<img class='card' src='pics/blackjack/7_of_diamonds.png' alt='7 of diamonds'>",
  "<img class='card' src='pics/blackjack/8_of_diamonds.png' alt='8 of diamonds'>", "<img class='card' src='pics/blackjack/9_of_diamonds.png' alt='9 of diamonds'>", "<img class='card' src='pics/blackjack/10_of_diamonds.png' alt='10 of diamonds'>", "<img class='card' src='pics/blackjack/jack_of_diamonds.png' alt='jack of diamonds'>", "<img class='card' src='pics/blackjack/queen_of_diamonds.png' alt='queen of diamonds'>", "<img class='card' src='pics/blackjack/king_of_diamonds.png' alt='king of diamonds'>", "<img class='card' src='pics/blackjack/ace_of_diamonds.png' alt='ace of diamonds'>", "<img class='card' src='pics/blackjack/2_of_hearts.png' alt='2 of hearts'>", "<img class='card' src='pics/blackjack/3_of_hearts.png' alt='3 of hearts'>", "<img class='card' src='pics/blackjack/4_of_hearts.png' alt='4 of hearts'>", "<img class='card' src='pics/blackjack/5_of_hearts.png' alt='5 of hearts'>", "<img class='card' src='pics/blackjack/6_of_hearts.png' alt='6 of hearts'>", "<img class='card' src='pics/blackjack/7_of_hearts.png' alt='7 of hearts'>", "<img class='card' src='pics/blackjack/8_of_hearts.png' alt='8 of hearts'>", "<img class='card' src='pics/blackjack/9_of_hearts.png' alt='9 of hearts'>", "<img class='card' src='pics/blackjack/10_of_hearts.png' alt='10 of hearts'>", "<img class='card' src='pics/blackjack/jack_of_hearts.png' alt='jack of hearts'>", "<img class='card' src='pics/blackjack/queen_of_hearts.png' alt='queen of hearts'>", "<img class='card' src='pics/blackjack/king_of_hearts.png' alt='king of hearts'>", "<img class='card' src='pics/blackjack/ace_of_hearts.png' alt='ace of hearts'>",
   "<img class='card' src='pics/blackjack/2_of_spades.png' alt='2 of spades'>", "<img class='card' src='pics/blackjack/3_of_spades.png' alt='3 of spades'>", "<img class='card' src='pics/blackjack/4_of_spades.png' alt='4 of spades'>", "<img class='card' src='pics/blackjack/5_of_spades.png' alt='5 of spades'>", "<img class='card' src='pics/blackjack/6_of_spades.png' alt='6 of spades'>", "<img class='card' src='pics/blackjack/7_of_spades.png' alt='7 of spades'>", "<img class='card' src='pics/blackjack/8_of_spades.png' alt='8 of spades'>", "<img class='card' src='pics/blackjack/9_of_spades.png' alt='9 of spades'>", "<img class='card' src='pics/blackjack/10_of_spades.png' alt='10 of spades'>", "<img class='card' src='pics/blackjack/jack_of_spades.png' alt='jack of spades'>", "<img class='card' src='pics/blackjack/queen_of_spades.png' alt='queen of spades'>", "<img class='card' src='pics/blackjack/king_of_spades.png' alt='king of spades'>", "<img class='card' src='pics/blackjack/ace_of_spades.png' alt='ace of spades'>"];

   function multiplyDecks(num) {
     var decks = [];
     for (var i = 0; i < num; i++) {
       decks = decks.concat(deck);
     }
     return decks;
   }
  deck = multiplyDecks(numDecks);

  for (var i = 52*numDecks; i > 0; i--) {
    newDeck.push(deck.splice(Math.floor(Math.random()*i),1).toString());
  }
  return newDeck;
}



function dealCard(id) {
    document.getElementById(id).innerHTML += newD.shift();
    updateStats();
}



function dealHand() {
  var numDecks = $("#numberDecks").value;
  // min bet == 1
  if ($("#betAmount").value == 0) {
    setStatus("Minimum bet is 1");
    // losing parameter
    if ($("#betAmount").max == 0) {
      setStatus("Haha! You lost. Lucky for you it's only cyber-money.");
    }
    return;
  }

  if (newD === null) {
    newD = shuffleCards();
      if (numDecks == 1) {
        setStatus("Dealer Shuffled 1 deck");
      }
      else {
        setStatus("Dealer Shuffled " + numDecks + " decks");
      }
    $("#numberDecks").disabled = true;
  }
  else if (newD.length <= 20*numDecks) {
    setStatus("End of round.  Option to change number of deck.");
    newD = null;
    $("#numberDecks").disabled = false;
    return;
  }
  else {
    $("#status h1").style.visibility = "hidden";
  }
  $('#bet').disabled = true;
  ++played;
  updateStats();
  $("#playersCards").innerHTML = "";
  dealCard("playersCards");
  $("#dealersCards").innerHTML = "<img class='card' src='pics/blackjack/card_back.jpg' alt='card back' id='holeCard'>";
  dealCard("dealersCards");
  $("#dealersCards").querySelectorAll("img")[1].style.display = "none";
  dealCard("playersCards");
  dealCard("dealersCards");
  $("#dealHand").style.display = "none";
  $("#hit").style.display = "inline";
  $("#stay").style.display = "inline";
  checkDouble();

  if (dealersPoints == 21) {
    if (playersPoints == 21) {
      handOutcome("pushedBlackjack");
      return;
    }
    else {
      handOutcome("dealerBlackjack");
      return;
    }
  }
  else if (playersPoints == 21) {
    handOutcome("blackjack");
  }
}

function checkDouble() {
  var doubleEnabled = $(".doubleEnabled");
  for (var i = 0; i < doubleEnabled.length; i++) {
    if (doubleEnabled[i].checked == true) {
      var chips = +$("#chips").innerHTML;
      var bet = +$("#betAmount").value;
      var numCards = $("#playersCards").querySelectorAll("img");
      if (doubleEnabled[i].value == "true" && bet <= chips) {
        $('#doubleDown').style.display = "inline";
      }
    }
  }
}


function hit() {
  // to insure that you can't double down twice
  $('#doubleDown').style.display = "none";
  dealCard("playersCards");
  countPoints();
  if (playersPoints > 21) {
    handOutcome("bust");
    return false;
  }
  else {
    return true;
  }
}

function doubleDown() {
  var chips = +$("#chips").innerHTML;
  var bet = +$("#betAmount").value;
  $("#chips").innerHTML = chips - bet;
  $("#betAmount").value = bet + bet;
  $("#betSlider").value = bet + bet;
  if (hit()) {
    stay();
  }
}



function stay() {
  updateStats();
  if (dealersPoints > 21) {
    handOutcome("dealerBusts");
  }
  else if (dealersPoints > 16) {
    if (dealersPoints > playersPoints) {
      handOutcome("lost");
    }
    else if (dealersPoints < playersPoints) {
      handOutcome("won");
    }
    else {
      handOutcome("pushed");
    }
  }
  else {
    dealCard("dealersCards");
    stay();
  }
}

function countPoints() {
  var d = $("#dealersCards").querySelectorAll("img");
  var p = $("#playersCards").querySelectorAll("img");
// double check code below
  function cardsArray(source, num) {
    var array = [];
    for (var i = num; source[i] !== undefined; i++) {
      array.push(source[i].alt.substr(0, 2));
    }
    return array;
  }

  dealersPoints = addPoints(cardsArray(d, 1), true);
  playersPoints = addPoints(cardsArray(p, 0));

  if (d.length > 2 && d[1].style.display === "none") {
    dealerShows = addPoints(cardsArray(d, 2));
  }
  else {
    dealerShows = dealersPoints;
  }
}

  // optional dealer argument allows ease of soft 17 toggle
function addPoints(array, dealer) {
  var output = 0;
  var numAces = 0;
  for (var i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "ja":
      case "qu":
      case "ki":
      // fall through
        output += 10;
        break;
      case "ac":
        numAces++;
        output += 11;
        break;
      default:
        output += +array[i];
    }
    while (numAces > 0 && output > 21) {
      output -= 10;
      numAces--;
    }
// If dealer arg. is set to true && hits on soft 17 checkbox is checked, soft 17 == 7
    if (dealer && $("#hitSoft").checked) {
      while (numAces > 0 && output === 17) {
        output -= 10;
        numAces--;
      }
    }
  }
  return output;
}

function setStatus(message) {
  var status = $("#status h1");
  status.innerHTML = message;
  status.style.visibility = "visible";
}

function updateStats() {
  var deckLength = newD.length;
  var numDecks = $("#numberDecks").value;
  $("#cardsInDeck").innerHTML = deckLength;
  $("#cardsDealt").innerHTML = 52*numDecks - deckLength;
  countPoints();
  $("#playersPoints").innerHTML = playersPoints;
  $("#dealersPoints").innerHTML = dealerShows;
  $("#won").innerHTML = won;
  $("#lost").innerHTML = lost;
  $("#pushed").innerHTML = pushed;
  $("#played").innerHTML = played;
  $("#busts").innerHTML = busts;
  $("#blackjacks").innerHTML = blackjacks;
  }

// betting

$("#betSlider").oninput = function () {
  $("#betAmount").value = $("#betSlider").value;
  $("#chips").innerHTML = $("#betSlider").max - $("#betSlider").value;
}
$("#betAmount").oninput = function () {
  // to stop inputing of values higher than maxbet
  if (+$("#betAmount").value > +$("#betAmount").max) {
    $("#betAmount").value = $("#betAmount").max;
  }
  if ($("#betAmount").value < 0) {
    $("#betAmount").value = 0;
  }
  $("#betSlider").value = $("#betAmount").value;
    $("#chips").innerHTML = $("#betAmount").max - $("#betAmount").value;
}

function handOutcome(outcome) {
  // displays hole card
  var chips = +$("#chips").innerHTML;
  var bet = +$("#betAmount").value;
  var onBlackjack = Math.floor(bet*+$("#onBlackjack").value);
  $('#holeCard').style.display = "none";
  $("#dealersCards").querySelectorAll("img")[1].style.display = "inline";

  switch (outcome) {
    case "blackjack":
      ++blackjacks;
      chips += onBlackjack;
      setStatus("Blackjack! You won " + onBlackjack + " chips!");
      break;
    case "won":
      ++won;
      chips += bet;
      setStatus("You Won " + bet + " Chips!");
      break;
    case "dealerBusts":
      ++won;
      chips += bet;
      setStatus("Dealer Busts! You win  " + bet + " Chips!");
      break;
    case "bust":
      ++busts;
      ++lost;
      chips -= bet;
      setStatus("Bust! You Lost " + bet + " Chips!");
      break;
    case "lost":
      ++lost;
      chips -= bet;
      setStatus("Dealer wins with " + dealersPoints + "! You lost " + bet + " Chips!");
      break;
    case "dealerBlackjack":
      ++lost;
      chips -= bet;
      setStatus("Dealer has Blackjack! You lost " + bet + " Chips!");
      break;
    case "pushedBlackjack":
      ++blackjacks;
      // fall through
    case "pushed":
      ++pushed;
      setStatus("Push!");
      break;

    default:
      console.log("incorrect usage of function");
      break;
  }

  // error whats with code below?
  updateStats();
  // resetHand
  $('#dealHand').style.display = "inline";
  $('#hit').style.display = "none";
  $('#stay').style.display = "none";
  $('#doubleDown').style.display = "none";
// update maxbet and chips
  $("#betAmount").max = chips + bet;
  $("#betSlider").max = chips + bet;
  if (chips < 0) {
    $("#betAmount").value = chips + bet;
    $("#betAmount").value = chips + bet;
    $("#chips").innerHTML = 0;
  }
  else {
    $("#chips").innerHTML = chips;
  }
  // allow betting
  $("#bet").disabled = false;
}
//for help screen
$(".help-button").addEventListener("click", function (event) {
  toggleClass($(".help"), "help-transition");
}, true);
$(".close").addEventListener("click", function (event) {
  toggleClass($(".help"), "help-transition");
}, true);
$(".help").addEventListener("click", function (event) {
  if(event.target === $(".help")){
    toggleClass($(".help"), "help-transition");
  }
}, true);

function toggleClass(element, item) {
  if(element.classList.contains(item)) {
    element.classList.remove(item);
  } else {
    element.classList.add(item);
  }
}



function $(selector) {
  var output = document.querySelectorAll(selector);
  if (output.length > 1) {
    return output;
  }
  else {
    return output[0];
  }
}
