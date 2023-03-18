import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("")
    const characterLimit = 200

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0) {
            setNoteText(event.target.value)
        }
       
    }

    const handleSaveClick = ()=> {
        if(noteText.trim().length>0) {
            handleAddNote(noteText)
            setNoteText("")
        }
       
    }

    return (
        <div className="flex flex-col justify-between bg-[#67d7cc] border rounded-xl p-4 min-h-[170px]
        ">
            <textarea className="rounded-none resize-none bg-[#67d7cc] outline-none" rows="8" cols="10" placeholder="Type to add a note ..."
            noteText={noteText}           
            onChange={handleChange}></textarea>
            <div className="note-footer flex items-center justify-between">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="bg-[#e1e1e1] border-none rounded-md
                px-3 py-1 hover:bg-[#ededed] cursor-pointer "
                onClick={handleSaveClick}>Save</button>
            </div>
        </div>)
}
export default AddNote;