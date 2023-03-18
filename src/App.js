import { useState,useEffect } from "react";
import {nanoid} from "nanoid"
import NoteList from "./Components/NoteList";
import Search from "./Components/Search";

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "21/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "12/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my fourth note",
    date: "12/04/2021"
  }
  ])

  const [searchText, setSearchText] = useState("")

  const addNote = (text) => {
    let date = new Date()
    let newNote = {
      id:nanoid,
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id)
    setNotes(newNotes)
  }

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes) {
      setNotes(savedNotes)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(
      "react-notes-app-data", 
      JSON.stringify(notes)
    )
  }, [notes])

  return (
    <div className="container max-w-[960px] mx-auto px-4 py-6">
      <Search handleSearchNote={setSearchText}/>
     <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} 
     handleDeleteNote = {deleteNote}/>
    </div>
  );
}

export default App;
