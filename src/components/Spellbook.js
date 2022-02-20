import AddSpellForm from "./AddSpellForm"
import SpellCard from "./SpellCard"
import {useState} from "react"

const Spellbook = (props) => {

    const [spellToShow,
        setSpellToShow] = useState('0')

    // Separate state and function to control spell card reveal as using the same
    // state for both the add spell form and the spell card would cause them to show
    // at the same time which is unwanted.
    const [displayCard,
        setDisplayCard] = useState(false)
    const cardClass = displayCard
        ? ''
        : 'hidden'
    const toggleCard = (e) => {
        setDisplayCard(!displayCard)
    }

    return (
        <div className="spellBook">
            <h2>Spellbook</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Spell Name</td>
                            <td>Type</td>
                            <td>Cast</td>
                            <td>Range</td>
                            <td>Targets</td>
                            <td>Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.spells
                            ? props
                                .spells
                                .map((spell, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{spell.name}</td>
                                            <td>{spell.type}</td>
                                            <td>{spell.cast}</td>
                                            <td>{spell.range}</td>
                                            <td>{spell.targets}</td>
                                            <td>
                                                <button
                                                    id={index}
                                                    onClick={(e) => {
                                                    toggleCard(e)
                                                    setSpellToShow(e.target.id)
                                                }}>Show Details</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            : null}
                    </tbody>
                </table>
            </div>
            <button onClick={props.toggleDisplay}>Add Spell</button>
            <AddSpellForm
                class={props.shouldDisplay}
                addSpell={props.addSpell}
                toggleDisplay={props.toggleDisplay}/>
            <SpellCard
                currentSpell={props.spells[spellToShow]}
                displayClass={cardClass}
                toggleCard={toggleCard}/>
        </div>
    )
}

export default Spellbook

// Create a table layout of the characters known spells Allow user to enter
// spells into spellbook using a modal. Table will contain simplified view, when
// view details is clicked on a spell, a modal appears with an expanded view of
// the spell When creating a spell, the user will have the option of adding an
// attribute modifier, this will then be looked up in the characters database
// entry and then will be applied to the spell automatically Add the option to
// edit/delete spell entries.