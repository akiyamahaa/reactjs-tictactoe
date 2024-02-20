import React, { useEffect } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard({ turn, setTurn, setWinner }) {
  const [board, setBoard] = React.useState(initialGameBoard)

  const handleDraw = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (!board[i][j]) {
          return false
        }
      }
    }
    return true;
  }

  const handleWin = (board) => {
    if (board[0][0] && board[0][0] == board[0][1] && board[0][0] == board[0][2] ||
      board[1][0] && board[1][0] == board[1][1] && board[1][0] == board[1][2] ||
      board[2][0] && board[2][0] == board[2][1] && board[2][0] == board[2][2] ||
      board[0][0] && board[0][0] == board[1][0] && board[0][0] == board[2][0] ||
      board[0][1] && board[0][1] == board[1][1] && board[0][1] == board[2][1] ||
      board[0][2] && board[0][2] == board[1][2] && board[0][2] == board[2][2] ||
      board[0][0] && board[0][0] == board[1][1] && board[0][0] == board[2][2] ||
      board[2][0] && board[2][0] == board[1][1] && board[2][0] == board[0][2]) {
      return true
    }
    return false;
  }

  const handleBtn = (position) => {
    const { rowIndex, colIndex } = position
    console.log(position, !Boolean(board[rowIndex][colIndex]))
    if (!board[rowIndex][colIndex]) {
      const cloneBoard = [...board]
      cloneBoard[position.rowIndex][position.colIndex] = turn
      setBoard(cloneBoard)
    }
  }

  useEffect(() => {
    if (handleWin(board)) {
      setWinner(turn)
    }
    else if (handleDraw(board)) {
      setWinner('draw')
    }
    else {
      setTurn((prevTurn) => prevTurn == "X" ? "O" : "X")
    }
  }, [JSON.stringify(board)])

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleBtn({ rowIndex, colIndex })} disabled={board[rowIndex][colIndex]}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}