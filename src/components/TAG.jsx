import '../styles/TAG.css';

function Tag(props) {
    const tags = props.tags;

    return(
        <aside className='tags-container'>
            {tags.map((tag) => (
                <h3>{tag}</h3>
            ))}
        </aside>
    );
}

export default Tag;