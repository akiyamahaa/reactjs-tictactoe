export default function GameOver({ winner }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && winner !== 'draw' && <p>
        {winner} won!
      </p>}
      {winner && winner == 'draw' && <p>
        It's a Draw!
      </p>}
    </div>
  )
}