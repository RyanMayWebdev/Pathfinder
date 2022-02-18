import './App.css';
import Nav from './components/Nav';
import {useState} from 'react';
import Journal from './components/Journal';
import Spellbook from './components/Spellbook';
import Character from './components/Character';

function App() {

    // Function and state for the journal/note component. Declared here for use with database in a simplified manner.
    const [note,
        setNote] = useState([
    ])
    const handleNewNote = (e) => {
      let newNotes = note;
      newNotes.push(e)
      setNote(newNotes)
    }

    // Changes the current page to be displayed
    const [currentPage,
        setCurrentPage] = useState('');
    const changePage = (page) => {
        setCurrentPage(page.target.innerText)
    }
    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => {
        setDisplay(!display)
    }

    const shouldDisplay = display ? 'visible' : 'hidden'

    // create/load spells from suer input and store to database
    const [spells, setSpells] = useState([        {
        name: "Acid Splash",
        type: "Acid, Attack, Cantrip, Evocation",
        cast: "somatic, verbal",
        range: "30 feet",
        targets: "1 creature"
    }])
    const addSpells = (spell) => {
        const spellList = spells
        spellList.push(spell)
        setSpells(spellList)
    }

    return (
        <div className="App">
            <Nav handleClick={changePage}/>
            {currentPage === 'Journal'
                ? <Journal notes={note} handleNote={handleNewNote} toggleDisplay={toggleDisplay} shouldDisplay={shouldDisplay} />
                : currentPage === 'Character'
                    ? <Character/>
                    : currentPage === 'Spellbook'
                        ? <Spellbook toggleDisplay={toggleDisplay} shouldDisplay={shouldDisplay} addSpell={addSpells} spells={spells} />
                        : <h1>Adventure awaits ...</h1>}
        </div>
    );
}

export default App;
