const Character = () => {
    return(
        <h2>Character</h2>
    )
}

export default Character

// User created character data.
// Once user is logged in, if it is a first time login, prompt for character sheet creation. 
// Create template for default character.
// User can enter in values and they will auto calculate modifiers and be entered to the db/shown in realtime
// Users can enter equipment worn and the modifiers will auto apply to the character sheet
// if user has already created their character sheet, then jsut display the data from the DB.