import React from "react"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver"

function App() {
  const [turn, setTurn] = React.useState('X')
  const [winner, setWinner] = React.useState('')
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className="highlight-player">
          <PlayerInfo name='Player 1' symbol={"X"} isActive={turn == "X"} />
          <PlayerInfo name='Player 2' symbol={"O"} isActive={turn == "O"} />
        </ol>
        {winner && <GameOver winner={winner} />}
        <GameBoard turn={turn} setTurn={setTurn} setWinner={setWinner} />
      </div>
    </main>
  )
}

export default App
