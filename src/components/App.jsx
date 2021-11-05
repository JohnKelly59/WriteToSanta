import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ContactUs from "./ContactUs";
function App() {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState(false);
  
  
  function addNote(newNote) {
    setMessage(false)
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


function eraseNotes(){
  setNotes([]);
    setMessage(!message);
  };



  return (
    <div>
      <Header />
      {message && <h2>Sent</h2>}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            description={noteItem.description}
            onDelete={deleteNote}
          />
        );
      })}
    
      <form action="../../post" method="post" 
              className="form">
       
        </form>
        <ContactUs
         stuff={JSON.stringify(notes)}
         restart= {eraseNotes}
         />
           
    </div>

  );

}

export default App;
