const Nav = (props) => {
    const handleClick = props.handleClick;
    return (
        <nav>
            <ul>
                <li><button onClick={(e)=> handleClick(e)}>Character</button></li>
                <li><button onClick={(e)=> handleClick(e)}>Journal</button></li>
                <li><button onClick={(e)=> handleClick(e)}>Spellbook</button></li>
            </ul>
        </nav>
    )
}

export default Nav;