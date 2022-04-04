import Note from "./Note"
import {useState} from "react"
import TakeNoteForm from "./TakeNoteForm"

const Journal = (props) => {
    const notes = props.notes

    return (
        <div className="overlay">
            {notes.length > 0
                ? notes.map(note => {
                    return <Note title ={note.title} body={note.body}/>
                })
                : <h1>Perhaps I should take a note?</h1>}

            {/* Button will display form modal */}
            <button onClick={props.toggleDisplay}>Take Note</button>
            <TakeNoteForm
                class={props.shouldDisplay}
                handleNote={props.handleNote}
                toggleDisplay={props.toggleDisplay}/>
        </div>
    )
}

export default Journal