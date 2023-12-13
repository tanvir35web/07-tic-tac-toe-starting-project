import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick () {
        // setIsEditing(!isEditing);  This both are same.But Below code is more cleaner and best practices.
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className="player-name">{name}</span>

    if(isEditing) {
        playerName = <input type="text" required value={name}/>
    }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'SAVE' : 'EDIT'}</button>
    </li>
  );
}
