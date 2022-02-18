import { useState } from "react"

// Component for creating new notes based on user input
const AddSpellForm = (props) => {
    console.log(props)

    const [spellName,setSpellName] = useState('')
    const [spellType, setSpellType] = useState('')
    const [spellCast, setSpellCast] = useState('')
    const [spellRange, setSpellRange] = useState('')
    const [spellTargets, setSpellTargets] = useState('')
    const [spellDescription, setSpellDescription] = useState('')
    const [spellDamage, setSpellDamage] = useState('')
    const [spellMaterials, setSpellMaterials] = useState('')
    const [spellAtrMod, setSpellAtrMod] = useState('')

    return (
        <form className = {props.class}>
            <label htmlFor="spellName">Spell Name:</label>
            <input type="text" name="spellName" id="spellName" onChange={(e) => setSpellName(e.target.value)}></input>
            <label htmlFor="spellType">Type:</label>
            <input type="text" name="spellType" id="spellType" onChange={(e) => setSpellType(e.target.value)}></input>
            <label htmlFor="spellCast">Cast:</label>
            <input type="text" name="spellCast" id="spellCast" onChange={(e) => setSpellCast(e.target.value)}></input>
            <label htmlFor="spellRange">Range:</label>
            <input type="text" name="spellRange" id="spellRange" onChange={(e) => setSpellRange(e.target.value)}></input>
            <label htmlFor="spellTargets">Targets:</label>
            <input type="text" name="spellTargets" id="spellTargets" onChange={(e) => setSpellTargets(e.target.value)}></input>
            <label htmlFor="spellDescription">Description:</label>
            <input type="text" name="spellDescription" id="spellDescription" onChange={(e) => setSpellDescription(e.target.value)}></input>
            <label htmlFor="spellDamage">Damage:</label>
            <input type="text" name="spellDamage" id="spellDamage" onChange={(e) => setSpellDamage(e.target.value)}></input>
            <label htmlFor="spellMaterials">Materials:</label>
            <input type="text" name="spellMaterials" id="spellMaterials" onChange={(e) => setSpellMaterials(e.target.value)}></input>
            <label htmlFor="spellAtrMod">Attribute Modifier:</label>
            <input type="text" name="spellAtrMod" id="spellAtrMod" onChange={(e) => setSpellAtrMod(e.target.value)}></input>
            <button type="submit" onClick={(e) => {
                e.preventDefault()
                const spellData = {
                    name: spellName,
                    type : spellType,
                    cast : spellCast,
                    range : spellRange,
                    targets : spellTargets,
                    description : spellDescription,
                    damage : spellDamage,
                    materials : spellMaterials,
                    attrModifier : spellAtrMod
                }
                props.addSpell(spellData)
                props.toggleDisplay()
            }}>Confirm</button>
        </form>
    )
}

export default AddSpellForm