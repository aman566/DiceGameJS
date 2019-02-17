
/**
    Game Rules:
    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice only once. Each result get added to his GLOBAL Score
    - After that, it's the next player's turn
    - The first player to reach 100 points on GLOBAl score  wins the game.
 */

var scores, roundScore, activePlayer, gamePlaying;

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. Display the result.
        var diceDOM = document.querySelector('.dice'); 
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        console.log(dice);
        // Add score
        roundScore = dice;
        // Next Player
        scores[activePlayer] += roundScore;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else{
        // Next Player chance
        nextPlayer();
        }
    };
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    roundScore = 0;
    activePlayer += 1;
    activePlayer %= 2;
    document.querySelector('.dice').style.display = 'none';

}
