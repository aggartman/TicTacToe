const clearBoard = function() {
    const markers = document.getElementsByClassName('marker')
    for(let i = 0; i < markers.length; i++) {
        markers[i].innerHTML = ' ';
    }
};

const gameBoard = (() => {
    const game = document.getElementById('choice');
    const gameMode = (mode) => {
        const player2 = document.getElementById('player2');
        const ai = document.getElementById('ai');
        const gameMode1 = document.getElementById('twoPlayer');
        const gameMode2 = document.getElementById('aiPlayer');
        const players = document.getElementById('players');
        const playerChoice = document.getElementById('playerChoice')
        const gameTxt = document.getElementById('gameTxt');
        gameTxt.style.display = 'block'
        switch (mode) {
            case player2:
                players.style.display = 'none';
                playerChoice.style.display = 'block'
                gameMode1.style.display = 'block';
                gameMode2.style.display = 'none';
                break;
            case ai: 
                players.style.display = 'none';
                playerChoice.style.display = 'block'
                gameMode1.style.display = 'none'
                gameMode2.style.display = 'block'
                break;
            default: 
                break;
        }  
    }
    const getToken = () => {
        if (game.value == '0') {
            var token1 = 'X';
            var token2 = 'O'
        } if (game.value == '1') {
            token1 = 'O'
            token2 = 'X'
        }
        return [token1, token2]
    }

    const tileCheck = (marker1, marker2, marker3) => {
        const gameOver = document.getElementById('gameOver');
        if (marker1 != '' || marker2 != '' || marker3 != '') {
            if ((marker1 === 'X' && marker2 === 'X' && marker3 === 'X') || (marker1 === 'O' && marker2 === 'O' && marker3 === 'O')) {
                gameOver.style.display = 'block';
                gameOver.addEventListener('click', function() {
                    clearBoard();
                    gameOver.style.display = 'none';
                })
            }
        }
    }

    const gameWin = () => {
        var tile1 = document.getElementById('markOne').innerText;
        var tile2 = document.getElementById('markTwo').innerText;
        var tile3 = document.getElementById('markThree').innerText;
        var tile4 = document.getElementById('markFour').innerText;
        var tile5 = document.getElementById('markFive').innerText;
        var tile6 = document.getElementById('markSix').innerText;
        var tile7 = document.getElementById('markSeven').innerText;
        var tile8 = document.getElementById('markEight').innerText;
        var tile9 = document.getElementById('markNine').innerText;
        tileCheck(tile1, tile2, tile3);
        tileCheck(tile4, tile5, tile6);
        tileCheck(tile7, tile8, tile9);
        tileCheck(tile1, tile5, tile9);
        tileCheck(tile1, tile4, tile7);
        tileCheck(tile2, tile5, tile8);
        tileCheck(tile3, tile6, tile9);
        tileCheck(tile7, tile5, tile3);
    }
    var token = 0;
    const placeToken = (event) => {
        let playerToken = document.getElementById('token1').innerText;
        let player2Token = document.getElementById('token2').innerText;
        var clickedTile = document.getElementById(event.target.id);
        if (clickedTile.firstChild.innerText == '') {
            if (token == 0) {
                clickedTile.firstChild.innerText = playerToken;
                gameWin();
                token++;
            } else {
                clickedTile.firstChild.innerText = player2Token;
                gameWin();
                token--;
            }
        }
    }
    const tiles = document.getElementsByClassName('tile');
    for (i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', placeToken);
    }
    return {
        gameMode, 
        placeToken,
        getToken,
    }
})();

const Player = (num) => {
    const players = document.getElementById('players');
    const player2 = document.getElementById('player2');
    const firstToken = document.getElementById('token1');
    const secondToken = document.getElementById('token2');
    const twoPlayer = document.getElementById('twoPlayer');
    const aiPlayer = document.getElementById('aiPlayer');
    const playerChoice = document.getElementById('playerChoice')
    
    if (num == 2) {
        var token = gameBoard.getToken();
        twoPlayer.style.display = 'none';
        playerChoice.style.display = 'none';
        players.style.display = 'block';
        player2.innerText = 'Player 2:';
        firstToken.innerText = token[0];
        secondToken.innerText = token[1];
    } else {
        token = gameBoard.getToken();
        aiPlayer.style.display = 'none';
        playerChoice.style.display = 'none'
        players.style.display = 'block';
        player2.innerText = 'Computer:';
        firstToken.innerText = token[0];
        secondToken.innerText = token[1];
    }
}
