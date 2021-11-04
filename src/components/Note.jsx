import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Zoom from '@material-ui/core/Zoom';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in="true">
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteForeverIcon /></button>
    </div>
    </Zoom>
  );
}

export default Note;
