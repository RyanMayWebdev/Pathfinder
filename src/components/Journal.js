import Note from "./Note"

const Journal = (props) => {
    const handleNewNote = props.handleNote
    const notes = props.notes
    return (
        <div className="background journal">
            {notes
                ? notes.map(note => {
                    return <Note title ={note.title} body = {note.body} />
                })
                : <h1>Perhaps I should take a note?</h1>}

            <button onClick={handleNewNote}>Take Note</button>
        </div>
    )
}

export default Journal