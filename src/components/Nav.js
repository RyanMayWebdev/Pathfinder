// Navigation at the top of the app. Switches between the various tabs.

const Nav = (props) => {
    const handleClick = props.handleClick;
    return (
        <nav>
            <ul>
            {/* Used buttons instead of links as I want the application to be single page and not scroll/jump to sections */}
                <li><button onClick={(e)=> handleClick(e)}>Character</button></li>
                <li><button onClick={(e)=> handleClick(e)}>Journal</button></li>
                <li><button onClick={(e)=> handleClick(e)}>Spellbook</button></li>
            </ul>
        </nav>
    )
}

export default Nav;