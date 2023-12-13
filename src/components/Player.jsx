import { useState } from "react";

export default function Player({initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick () {
        // setIsEditing(!isEditing);  This both are same.But Below code is more cleaner and best practices.
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
      setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if(isEditing) {
      editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'SAVE' : 'EDIT'}</button>
    </li>
  );
}
