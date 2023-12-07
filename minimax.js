function bestMove() {
    //AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            //Is the spot available?
            if (boarch[i][j] == '') {
                boarch[i][j] = ai;
                let score = minimax(boarch, 0, false);
                boarch[i][j] = '';
                if (score > bestScore) {
                    bestScore = score;
                    move = {i,j};
                }
            }
        }
    }
    boarch[move.i][move.j] = ai;
    currentPlayer = human;
}

let score = {
    X:10,
    O:-10,
    tie:0
};

function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null)
    return scores[result];
    }

    if (isMaximizing){
        let bestScore = -Infinity;
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                // is the spot available?
                if (board[i][j]==''){
                    board[i][j] = ai;
                    let score = minimax(board, depth +1, false);
                    board[i][j]= '';
                    bestScore = max(score, bestScore);
                }
            }
        }
            return bestScore;
        }else{
            let bestScore = -Infinity;
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                // is the spot available?
                if (board[i][j]==''){
                    board[i][j] = human;
                    let score = minimax(board, depth +1, true);
                    board[i][j]= '';
                    bestScore = min(score, bestScore);
                }
            }
         }
        return bestScore;
    }