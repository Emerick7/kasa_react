import '../styles/Host.css';

function Host(props) {
    const host = props.host;

    return (
        <div className='host-container'>
            <p>{host.name}</p>
            <img src={host.picture} alt='Host-Housing'/>
        </div>
    );
}

export default Host;