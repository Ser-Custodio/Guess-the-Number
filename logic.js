var rdmNb = 0;
var nbTry = 0;
var number = 0;
var x = 0;
var startBtn = ['START', 'COMMENCER']
var playTitle = ['LET\'S PLAY', 'JOUONS'];
var guessBtn = ['GUESS', 'DEVINEZ'];
var tries = ['Number of tries: ', 'Nombre d\'essaies : '];
var triedNumber = []
var numbersTries = ['Tried numbers: ', 'Numéros essayés : ']
var size = []
var title = ['GUESS THE NUMBER', 'DEVINEZ LE NOMBRE'];
var maxNb = 0;

var maxSize = ['Choose the max number', 'Choisissez le numèro maximale'];
var maxNumber = ['Choose', 'Choisissez'];

function getLang() {
    var mainDiv = document.getElementById('main');
    var choice = ""
    if (document.getElementById('eng').checked) {
        choice = 'eng';
    } else if (document.getElementById('fr').checked) {
        choice = 'fr';
    }

    mainDiv.style.display = 'block'
    document.getElementById('gameSize').style.display = 'block'
    if (choice == 'eng') {
        x = 0
    } else {
        x = 1
    }
    return choice;
}
function setMaxNb(){
    maxNb = document.getElementById('inputMax').value;
    document.getElementById('guess').setAttribute('max', maxNb)
}

var instructions = ['<p>A random number between 1 and the max number will be generated.</p>' +
'<p>You\'ll have 5 trys to guess the number.</p>' +
'<p>After each try, you can get 3 types of message:</p>' +
'<ul>' +
'<li class="correct">You guessed correctly</li>' +
'<li class="wrong">Wrong choice, the number you chose is bigger than the right number</li>' +
'<li class="wrong">Wrong choice, the number you chose is smaller than the right number</li>' +
'</ul>',
    '<p>Un nombre aléatoire compris entre 1 et le numero maximale sera généré.</p>' +
    '<p>Vous aurez 5 essais pour deviner le nombre.</p>' +
    '<p>Après chaque essai, vous pouvez obtenir 3 types de message:</p>' +
    '<ul>' +
    '<li class="correct">Vous avez bien deviné</li>' +
    '<li class="wrong">Mauvais choix, le nombre que vous avez choisi est plus grand que le bon nombre</li>' +
    '<li class="wrong">Mauvais choix, le nombre que vous avez choisi est plus petit que le bon nombre</li>' +
    '</ul>']

function startGame() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('guessBtn').disabled = false;
    document.getElementById('message').innerHTML = '';
    document.getElementById('trNb').innerHTML = '';
    document.getElementById('triedNumbers').innerHTML = '';
    rdmNb = Math.floor(Math.random() * maxNb) + 1;
    nbTry = 0;
    triedNumber = [];
    document.getElementById('guess').value = '';
    document.getElementById('instructions').style.display = "none"
    document.getElementById('letsPlay').style.display = "block"
    return rdmNb;
};

function display() {
    document.getElementById('gameTitle').innerHTML = title[x];
    document.getElementById('inst1').innerHTML = instructions[x];
    document.getElementById('startBtn').innerHTML = startBtn[x];
    document.getElementById('guessBtn').innerHTML = guessBtn[x];
    document.getElementById('playTitle').innerHTML = playTitle[x];
    document.getElementById('nbTry').innerHTML = tries[x];
    document.getElementById('triedNb').innerHTML = numbersTries[x];
    document.getElementById('maxSize').innerHTML = maxSize[x];
    document.getElementById('maxNumber').innerHTML = maxNumber[x];
}

function guessNumber() {
    number = document.getElementById('guess').value;
    var msgCorrect = ["YOU GUESSED CORRECTLY", "VOUS AVEZ BIEN DEVINé"];
    var msgWrong =[]
    if (number == rdmNb) {
        document.getElementById('message').setAttribute('class','correct');
        document.getElementById('message').innerHTML = msgCorrect[x];
        gameOver();
    } else if (number > rdmNb) {
        size = ["smaller", "petit"]
        msgWrong = ["WRONG CHOICE, try a " + size[x] + " number", "MAUVAIS CHOIX, essayez un chiffre plus " + size[x]+""];
        document.getElementById('message').setAttribute('class','wrong');
        document.getElementById('message').innerHTML = msgWrong[x];
    } else if (number < rdmNb) {
        size = ['bigger', 'grand']
        msgWrong = ["WRONG CHOICE, try a " + size[x] + " number", "MAUVAIS CHOIX, essayez un chiffre plus " + size[x]+""];
        document.getElementById('message').setAttribute('class','wrong');
        document.getElementById('message').innerHTML = msgWrong[x];
    }

    nbTry = nbTry + 1;
    triedNumber.push(number);

    if (nbTry == 5) {
        gameOver()
    }
    document.getElementById('trNb').innerHTML = nbTry;
    document.getElementById('triedNumbers').innerHTML = triedNumber;
}

function gameOver() {
    var guessBtn = document.getElementById('guessBtn');
    var startBtn = document.getElementById('startBtn');
    startBtn.style.display = 'block'
    guessBtn.disabled = true;
}