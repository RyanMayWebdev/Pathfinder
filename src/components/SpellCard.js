const SpellCard = (props) => {
    console.log(props)
    const currentSpell = props.currentSpell
    return (
        <div>
        <div>
            <h2>{currentSpell.name}</h2>
            <p>Cast: {currentSpell.cast}</p>
        </div>
    </div>
    )

}

export default SpellCard