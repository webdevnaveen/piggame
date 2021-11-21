var score,roundScore,dice,activePlayer,gamePlaying;
init();
document.querySelector('.roll-dice').addEventListener('click' ,function(){
    if(gamePlaying){
        dice = Math.floor(Math.random()*6+1);
        document.getElementById('dice').style.display = "block";
        document.querySelector('#dice').src = "dice"+dice+".png" ;
       
    
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
            
        }
        else{
           newPlayer();
        }
    }

})
document.querySelector('.hold').addEventListener('click', function(){
    if(gamePlaying){
        score[activePlayer] += roundScore;
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
     
        if(score[activePlayer]>=20){
            document.querySelector('#player-'+activePlayer).textContent = "Winner !";
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('#dice').style.display = 'none';
            gamePlaying = false;
        }
        else{
            newPlayer();
        }
    }

})

document.querySelector(".new-game").addEventListener('click', init);

function newPlayer(){
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}
function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#player-0').textContent = "Player 1";
    document.querySelector('#player-1').textContent = "Player 2";
    document.getElementById('dice').style.display = "none";
}