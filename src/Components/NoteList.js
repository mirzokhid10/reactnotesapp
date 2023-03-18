import AddNote from "./AddNote.js"
import Note from "./Note"

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className="notes-list grid gap-4">
            {notes.map((note)=><Note id={note.id} text={note.text} date={note.date} handleDeleteNote= {handleDeleteNote}/>)}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NoteList