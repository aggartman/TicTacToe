const clearBoard = function() {
    const markers = document.getElementsByClassName('marker')
    for(let i = 0; i < markers.length; i++) {
        markers[i].innerHTML = ' ';
    }
};

const gameBoard = (() => {
    const game;
    const gameMode = () => {
        let gameMode1 = document.getElementById('player2');
        let gameMode2 = document.getElementById('ai');
        let twoPlayer = document.getElementById('twoPlayer');
        let computer = document.getElementById('computerPlay');
        
        gameMode1.addEventListener('click', function() {
            computer.style.display = 'none';
            twoPlayer.style.display = 'block';
            return game = true;
        })
        gameMode2.addEventListener('click', function() {
            computer.style.display = 'block';
            twoPlayer.style.display = 'none'
            return game = false
        })
    }
    return {
        gameMode,
    }
})();

const Player = () => {
    const getToken = () => {
        if (game == true)
            let token = document.getElementById('choice1').value;
        else {
            token = document.getElementById('choice2').value;
        }
    }
}