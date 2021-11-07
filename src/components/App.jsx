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
  
    setMessage(!message);
    setTimeout(function() {
      setNotes([])}, 1500);
  };

  var gifts = notes.map(gift =>"\n " + gift.title + ": " + gift.description + gift.link);



  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);






  return (
    <div>
{/* <p>{!data ? "Loading..." : data}</p> */}

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

         stuff={gifts}
         restart= {eraseNotes}
         />
           
    </div>

  );

}

export default App;
