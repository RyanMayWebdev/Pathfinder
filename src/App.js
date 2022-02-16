import './App.css';
import Nav from './components/Nav';
import {useState} from 'react';
import Journal from './components/Journal';
import Spellbook from './components/Spellbook';
import Character from './components/Character';

function App() {

    const [note,
        setNote] = useState([
        {
            title: 'February 16th, 2022',
            body: "This is a new note"
        }
    ])
    const handleNewNote = () => {
      console.log("note taken")
        setNote([
            {
                title: 'February 16th, 2022',
                body: "This is a new note"
            }, {
                title: 'February 16th, 2022',
                body: "Second Note"
            }
        ])
    }
    const [currentPage,
        setCurrentPage] = useState('');
    const changePage = (page) => {
        setCurrentPage(page.target.innerText)
    }

    return (
        <div className="App">
            <Nav handleClick={changePage}/>
            {currentPage == 'Journal'
                ? <Journal notes={note} handleNote={handleNewNote}/>
                : currentPage == 'Character'
                    ? <Character/>
                    : currentPage == 'Spellbook'
                        ? <Spellbook/>
                        : <h1>Adventure awaits ...</h1>}
        </div>
    );
}

export default App;
