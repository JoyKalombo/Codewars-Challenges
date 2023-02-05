// returns index of move
function solveTTT(board) {

    // array=['0', '1', '2',
    //    '3', '4', '5', 
    //    '6', '7', '8',]

  // winning conditions
  if (board.length != 9) {
      return "error"
  }
const a = (board[0] == 'X' && board[1] == 'X' && board[2] == 'X')

const b = (board[3] == 'X' && board[4] == 'X' && array[5] == 'X')

const c = (board[6] == 'X' && board[7] == 'X' && board[8] == 'X')

const d = (board[0] == 'X' && board[3] == 'X' && board[6] == 'X')

const e = (board[1] == 'X' && board[4] == 'X' && board[7] == 'X')

const f = (board[2] == 'X' && board[5] == 'X' && board[8] == 'X')

const g = (board[0] == 'X' && board[4] == 'X' && board[8] == 'X')

const h = (board[2] == 'X' && board[4] == 'X' && board[6] == 'X')

for (i = 0; i <= 8; i++) {
    if (board[i] == '') {
        board[i] = 'X'
        if ((board[0] == 'X' && board[1] == 'X' && board[2] == 'X') || (board[3] == 'X' && board[4] == 'X' && array[5] == 'X') || (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') || (board[0] == 'X' && board[3] == 'X' && board[6] == 'X') || (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') || (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') || (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') || (board[2] == 'X' && board[4] == 'X' && board[6] == 'X')) {
//             console.log("the winning move is X in " + i)
            return (i)
        } else {
            board[i] = ''
        }

    }
}
// console.log("there is no winning move in this scenario")
return "Error with board"
}

// solveTTT( ['', '', '', 
//           'O', 'X', '', 
//           '', '', 'X'] )