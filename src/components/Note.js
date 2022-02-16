const Note = (props) => {
    return(
        <div className='note'>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Note