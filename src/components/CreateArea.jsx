import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
    link: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      if (name === "title"){  
      return {
        ...prevNote,
        [name]: value,
        link : "https://www.amazon.com/s?k=" + value.replace(/\s/g, "+")
      };}
      else{
        return {
          ...prevNote,
          [name] : value
        };}
      })
    }
  
  const [opened, setOpened] = useState(false)
  
  function pressed(){
    setOpened(true)
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
     title: "",
      description: ""
    });
    event.preventDefault();
console.log(note)
  }

  return (
    <div>
      <form className="create-note">
      
        <input
        onClick={pressed}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Gift"
        />
        {opened ?
        <textarea
          name="description"
          onChange={handleChange}
          value={note.description}
          placeholder="About the gift"
           rows={opened ? 3 : 1}
        />: null }
        <Zoom in={opened}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
     </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
