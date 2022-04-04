const Character = () => {
    const characterStats = [
        {
            Strength: 10,
            Dexterity: 22,
            Constitution: 14,
            Intelligence: 16,
            Wisdom: 10,
            Charisma: 8
        }, {
            AC: 20,
            Touch: 17,
            'Flat-Foot': 16
        }, {
            Fort: 3,
            Ref: 6,
            Will: 4
        }, {
            'Melee Att': 7,
            Ranged: 4,
            CMB: 8,
            CMD: 14
        }, {
            Hitpoints: 35
        }
    ]
    // Maps through the array of objects containing the characters stats in order to
    // display them all on screen without having to hard code as certain values can
    // change. Map through each object and then map it's key/value pair into
    // paragraphs within the dom.
    return (
        <div className="overlay">
            <h2>Character</h2>
            {/* Mapping through the array of objects */}
            <div className="charStats">
                {characterStats.map(stat => {
                    {/* Map through each individual object */
                    }
                    return (
                        <div className="statBlock">
                            {Object
                                .entries(stat)
                                .map((key, value) => {
                                    {/* Map through the key value pairs and return them as a paragraph within one div containing the pair */
                                    }
                                    return (
                                        <div key={value}>
                                            {key.map(property => <p>{property}</p>)}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Character

// User created character data. Once user is logged in, if it is a first time
// login, prompt for character sheet creation. Create template for default
// character. User can enter in values and they will auto calculate modifiers
// and be entered to the db/shown in realtime Users can enter equipment worn and
// the modifiers will auto apply to the character sheet if user has already
// created their character sheet, then jsut display the data from the DB.