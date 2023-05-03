import '../styles/TAG.css';

function Tag(props) {
    const tags = props.tags;

    return(
        <aside className='tags-container'>
            {tags.map((tag, index) => (
                <h3 key={`${tag}-${index}`}>{tag}</h3>
            ))}
        </aside>
    );
}

export default Tag;