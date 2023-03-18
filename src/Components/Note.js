import {MdDeleteForever} from "react-icons/md"

const Note = ({id,text,date, handleDeleteNote}) => {
    return (
        <div className="note whitespace-pre-wrap flex flex-col justify-between bg-[#fef68a] border rounded-xl p-4 min-h-[170px]">
            <span>{text}</span>
            <div className="note-footer flex items-center justify-between">
                <small>{date}</small>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)} className="delete-icon" size="1.3rem"/>
            </div>
        </div>
    )
}

export default Note