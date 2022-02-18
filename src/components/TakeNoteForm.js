import { useState } from "react"

// Component for creating new notes based on user input
const TakeNoteForm = (props) => {
    const [title,setTitle] = useState('')
    const [body, setBody] = useState('')
    return (
        <form className = {props.class}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)}></input>
            <label htmlFor="body">Note:</label>
            <input type="body" name="body" id="body" onChange={(e) => setBody(e.target.value)}></input>
            <button type="submit" onClick={(e) => {
                e.preventDefault()
                const noteData = {
                    title: title,
                    body : body
                }
                props.handleNote(noteData)
                props.toggleDisplay()
            }}>Confirm</button>
        </form>
    )
}

export default TakeNoteForm