const SpellCard = (props) => {
    console.log(props)
    const currentSpell = props.currentSpell
    return (
        <div className={`blurBackground ${props.displayClass}`}>
            <div className="cardOverlay">
                <button 
                    className="close" 
                    id="close" name="close" 
                    onClick={props.toggleCard}>X
                </button>
                <h2>{currentSpell.name}</h2>
                <p>Type: {currentSpell.type}</p>
                <p>Cast: {currentSpell.cast}</p>
                <p>Range: {currentSpell.range}</p>
                <p>Targets: {currentSpell.targets}</p>
                <p>Damage: {currentSpell.damage}</p>
                <p>Materials: {currentSpell.materials}</p>
                <p>Description: {currentSpell.description}</p>
            </div>
        </div>
    )

}

export default SpellCard