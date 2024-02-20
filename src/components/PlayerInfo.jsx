import { useState } from "react"

export default function Player({ name, symbol, isActive }) {
  const [isEdit, setIsEdit] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  const handleBtn = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit)
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {isEdit ? <input value={playerName} type="text" onChange={event => setPlayerName(event.target.value)} /> : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleBtn}>{isEdit ? 'Save' : 'Edit'}</button>
    </li>
  )
}